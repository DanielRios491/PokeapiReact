import "./ImageNavigation.css";
import Pattern from "../../assets/PatternDrawn.png";
import ButtonAtom from "../atoms/ButtonAtom";

export default function ImageNavigation({id, type}) {

    const previus = id === 1 ? 898 : id - 1;
    const next = id + 1;

    return (
        <div className={`image-navigation ${type}`}>
            <div className="patterns">
                <img src={Pattern} alt="Pattern" className="pattern-img" />
                <img src={Pattern} alt="Pattern" className="pattern-img" />
            </div>
            <div className="pokemon-section">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    alt="Pokemon" 
                    loading="lazy"
                />
            </div>
            <div className="buttons-section">
                <ButtonAtom classname="previus-button">{`Previus ${previus}`}</ButtonAtom>
                <ButtonAtom classname="next-button">{`Previus ${next}`}</ButtonAtom>
            </div>
        </div>
    );
}