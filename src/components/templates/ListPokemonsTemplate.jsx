import PokemonCardOrganism from '../organisms/PokemonCardOrganism';
import { fetchPokeApiData } from '../../api/PokeApiConsumptio';
import { useState, useEffect, useRef } from 'react';
import SearchBar from '../organisms/SearchBar';
import './ListPokemonsTemplate.css'
import { useLoaderData } from 'react-router';

export default function ListPokemonsTemplate() {
    const { pokemons } = useLoaderData();
    const [ listPokemons, setListPokemons ] = useState(pokemons);
    const loaderRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(25);

    useEffect(() => {
        const observer = new IntersectionObserver(async entries => {
            if (entries[0].isIntersecting) {
                setOffset(prev => {
                    return prev < 150 ? prev + limit : prev + 1;
                });
            }
        });

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        console.log(offset, listPokemons.length, "controlamos la cantidad maxima")
        if(listPokemons.length === 125) setLimit(1)
        const loadPokemons = async () => {
            const newPokemons = await fetchPokeApiData(limit, offset);
            setListPokemons(prev => [...prev, ...newPokemons]);
        };
        if (offset != 0 && listPokemons.length < 152) loadPokemons();
    }, [offset]);
    
    function onHandleSearchChange (query) {
        if(query == ""){
            setListPokemons(pokemons)
        }
        setListPokemons(past => past.filter(pokemons => pokemons.name.toLowerCase().includes(query.toLowerCase())))
    }
    
    return (
        <div className='list-pokemons'>
            <SearchBar onChange={onHandleSearchChange} />
            <div className='template-grid'>
                {
                    pokemons && listPokemons && listPokemons.map(pokemon => 
                        <div key={pokemon.id} className='card-container'>
                            <PokemonCardOrganism
                                id={pokemon.id}
                                name={pokemon.name}
                                types={pokemon.types}
                                color={pokemon.color}
                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                            />
                        </div>
                    )
                }
            </div>
            {<div ref={loaderRef} style={{ height: '20px' }} />}
        </div>
    );
}