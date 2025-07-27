import { useLoaderData } from "react-router";
import ImageNavigation from "../organisms/ImageNavigation";
import GeneralInformation from "../organisms/GeneralInformation";
import SpecificInformation from "../organisms/SpecificInformation";
import { useNavigate } from "react-router";

export default function PokemonInformation() {
    const { pokemonId } = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className="pokemon-information">
            <div className="pokemon-column-information">
                <div>{`Aqui ira la informacion del pokemons ${pokemonId}`}</div>
                <button onClick={() => navigate(-1)}>
                    ← Volver
                </button>
                <GeneralInformation />
                <SpecificInformation />
            </div>
            <ImageNavigation />
        </div>
    );
}