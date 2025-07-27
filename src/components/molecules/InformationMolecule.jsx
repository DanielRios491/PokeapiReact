import NumberAtom from "../atoms/NumberAtom";
import LabelAtom from "../atoms/LabelAtom";
import "./MoleculeStyles.css";

export default function InformationMolecule({ id, name }) {
    return (
        <div className="pokemon-information">
            <NumberAtom id={id} />
            <LabelAtom label={name[0].toUpperCase() + name.slice(1)} />
        </div>
    );
}