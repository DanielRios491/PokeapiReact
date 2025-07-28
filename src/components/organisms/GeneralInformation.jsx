import { useNavigate } from "react-router";
import LabelAtom from "../atoms/LabelAtom";
import NumberAtom from "../atoms/NumberAtom";
import TypeBadgeIcon from "../atoms/TypeBadgeIcon";
import "./GeneralInformation.css";
import ButtonAtom from "../atoms/ButtonAtom";

export default function GeneralInformation({id ,name ,generation ,types}){
    const navigate = useNavigate();
    return (
        <div className="general-information">
            <ButtonAtom onClick={() => navigate("/pokedex")} classname="big-size">←</ButtonAtom>
            <NumberAtom id={id} classStyle="id-bigger" />
            <LabelAtom label={name[0].toUpperCase() + name.slice(1)} classStyle="name-bigger" />
            <span className="generation-information">{generation[0].toUpperCase() + generation.slice(1)}</span>
            <div className="information-types">
                {types.map((type) => {
                    return <TypeBadgeIcon type={type}/>;
                })}
            </div>
        </div>
    );
}