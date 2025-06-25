import PokemonCardOrganism from '../organisms/PokemonCardOrganism';
import { fetchPokeApiData } from '../../api/PokeApiConsumptio';
import { useState, useEffect } from 'react';

export default function TestTemplate() {

    const [ pokemons, setPokemons ] = useState();
    useEffect(() => {
        fetchPokeApiData(setPokemons)
    }, [])
    
    
    return (
        <div className='tempate-grid'>
            {
                pokemons && pokemons.map(pokemon => 
                    <div key={pokemon.url[pokemon.url.lenght - 2]}>
                        <PokemonCardOrganism
                            
                            id={pokemon.url[pokemon.url.lenght - 2]}
                            name={pokemon.name}
                            types={["Grass"]}
                            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                        />
                    </div>
                    )
            }
            <PokemonCardOrganism
                id="001"
                name="Bulbasaur"
                types={["Grass", "Poison"]}
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            />
            <PokemonCardOrganism
                id="004"
                name="Charmander"
                types={["Fire"]}
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
            />
        </div>
    );
}