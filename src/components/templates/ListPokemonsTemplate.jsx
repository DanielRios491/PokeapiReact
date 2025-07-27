import PokemonCardOrganism from '../organisms/PokemonCardOrganism';
import { useState, useEffect, useRef } from 'react';
import SearchBar from '../organisms/SearchBar';
import './ListPokemonsTemplate.css'
import { useLoaderData } from 'react-router';

export default function ListPokemonsTemplate() {
    const { pokemons } = useLoaderData();
    const [listPokemons, setListPokemons] = useState(pokemons.slice(0, 25));
    const [limit, setLimit] = useState(25);
    const loaderRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(async entries => {
            if (entries[0].isIntersecting) {
                setLimit(prev => prev + 25);
            }
        });

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        console.log(limit, listPokemons.length, "revisamos los datos")
        if(limit != 25) setListPokemons(pokemons.slice(0, limit));
    }, [limit]);
    
    function onHandleSearchChange (query) {
        if(query == ""){
            setListPokemons(pokemons)
        }
        setListPokemons(pokemons => pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase())))
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