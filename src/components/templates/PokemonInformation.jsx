import { useLoaderData } from "react-router";
import ImageNavigation from "../organisms/ImageNavigation";
import GeneralInformation from "../organisms/GeneralInformation";
import SpecificInformation from "../organisms/SpecificInformation";
import "./PokemonInformation.css";

export default function PokemonInformation() {
    const { pokemonInfo } = useLoaderData();
    console.log(pokemonInfo)

    return (
        <div className="pokemon-information">
            <div className="pokemon-column-information">    
                <GeneralInformation 
                    id={pokemonInfo.id} 
                    name={pokemonInfo.name} 
                    generation={pokemonInfo.generation} 
                    types={pokemonInfo.types} 
                />
                <SpecificInformation
                    species={pokemonInfo.species}
                    about={pokemonInfo.flavor_text}
                    height={pokemonInfo.height}
                    weight={pokemonInfo.weight}
                    abilities={pokemonInfo.abilities}
                    weaknesses={pokemonInfo.weaknesses}
                    stats={pokemonInfo.stats}
                    evolutionChain={pokemonInfo.evolutionChain}
                />
            </div>
            <ImageNavigation id={pokemonInfo.id} type={pokemonInfo.types[0]}/>
        </div>
    );
}