import "./ImageNavigation.css";
import Pattern from "../../assets/PatternDrawn.png";

export default function ImageNavigation({id, type}) {
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
        </div>
    );
}