import PokemonTypeMolecule from "../molecules/PokemonTypeMolecule";
import InformationMolecule from "../molecules/InformationMolecule";
import Pokeball from "../../assets/Pokeball.png";
import Pattern from "../../assets/PatternDrawn.png";
import '../styles/PokemonCard.css';

export default function PokemonCardOrganism({ id, name, types, image }) {

    return (
        <div className={`pokemon-card ${types[0].toLowerCase()}`}>
            <div className="card-text">
                <img src={Pattern} alt="Pattern" className="pattern-img" />
                <img src={Pokeball} alt="Pokeball" className="pokeball-img"/>
                <InformationMolecule id={id} name={name} />
                <PokemonTypeMolecule types={types} />
                <img />
                <img
                    src={image}
                    alt={name}
                    className="pokemon-image"
                />
            </div>


        </div>
    );
}