import NumberAtom from "../atoms/NumberAtom";
import LabelAtom from "../atoms/LabelAtom";
import PokemonTypeMolecule from "../molecules/PokemonTypeMolecule";
import '../styles/PokemonCard.css';

export default function PokemonCardOrganism({ id, name, types, image }) {

    return (
        <div className={`pokemon-card ${types[0].toLowerCase()}`}>
            <div className="card-text">
                <NumberAtom id={id} />
                <LabelAtom label={name} />
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