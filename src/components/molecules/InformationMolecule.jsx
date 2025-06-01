import NumberAtom from "../atoms/NumberAtom";
import LabelAtom from "../atoms/LabelAtom";

export default function InformationMolecule({ id, name }) {
    return (
        <div className="pokemon-types">
            <NumberAtom id={id} />
            <LabelAtom label={name} />
        </div>
    );
}