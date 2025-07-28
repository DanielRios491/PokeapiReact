import "./ImageNavigation.css";
import Pattern from "../../assets/PatternDrawn.png";

export default function ImageNavigation({}) {
    return (
        <div className="image-navigation">Aqui ira la nevagacion y la imagen del pokemon
            <div>
                <img src={Pattern} alt="Pattern" className="pattern-img" />
                <img src={Pattern} alt="Pattern" className="pattern-img" />
            </div>
        </div>
    );
}