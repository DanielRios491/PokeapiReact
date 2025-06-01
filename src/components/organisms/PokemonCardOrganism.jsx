import PokemonTypeMolecule from "../molecules/PokemonTypeMolecule";
import InformationMolecule from "../molecules/InformationMolecule";
import '../styles/PokemonCard.css';

export default function PokemonCardOrganism({ id, name, types, image }) {

    return (
        <div className={`pokemon-card ${types[0].toLowerCase()}`}>
            <div className="card-text">
                <InformationMolecule id={id} name={name} />
                <PokemonTypeMolecule types={types} />
            </div>

            <img
                src={image}
                alt={name}
                className="pokemon-image"
            />
        </div>
    );
}