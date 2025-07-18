import TypeBadgeAtom from "../atoms/TypeBadgeAtom";
import "./MoleculeStyles.css";

export default function PokemonTypeMolecule({ types }) {
    return (
        <div className="pokemon-types">
            {types.map((type) => (
                <TypeBadgeAtom key={type} type={type} />
            ))}
        </div>
    );
}