import PokemonTypeMolecule from "../molecules/PokemonTypeMolecule";
import InformationMolecule from "../molecules/InformationMolecule";
import Pattern from "../../assets/PatternDrawn.png";
import '../styles/PokemonCard.css';

export default function PokemonCardOrganism({ id, name, types, color, image }) {

    return (
        <div className={'pokemon-card'} style={{backgroundColor: `${color}`}}>
            <div className="card-text">
                <img src={Pattern} alt="Pattern" className="pattern-img" />
                <InformationMolecule id={id} name={name} />
                <PokemonTypeMolecule types={types} />
            </div>
            <div className="card-image" >
                <img
                    src={image}
                    alt={name}
                    className="pokemon-image"
                />
            </div>
        </div>
    );
}