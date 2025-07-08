import PokemonCardOrganism from '../organisms/PokemonCardOrganism';
import { fetchPokeApiData } from '../../api/PokeApiConsumptio';
import { useState, useEffect } from 'react';
import SearchBar from '../organisms/SearchBar';
import './ListPokemonsTemplate.css'

export default function ListPokemonsTemplate() {

    const [ pokemons, setPokemons ] = useState();
    useEffect(() => {
        async function LoadData() {
            setPokemons(await fetchPokeApiData())
        }
        LoadData()
    }, [])
    
    
    return (
        <div className='list-pokemons'>
            <SearchBar />
            <div className='template-grid'>
                {
                    pokemons && pokemons.map(pokemon => 
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