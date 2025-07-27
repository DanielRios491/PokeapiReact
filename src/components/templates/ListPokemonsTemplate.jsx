import PokemonCardOrganism from '../organisms/PokemonCardOrganism';
import { fetchPokeApiData } from '../../api/PokeApiConsumptio';
import { useState, useEffect } from 'react';
import SearchBar from '../organisms/SearchBar';
import './ListPokemonsTemplate.css'
import { useLoaderData } from 'react-router';

export default function ListPokemonsTemplate() {
    const { pokemons } = useLoaderData();
    const [ listPokemons, setListPokemons ] = useState();

    useEffect(() => {
        setListPokemons(pokemons)
    }, [pokemons])
    
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
        </div>
    );
}