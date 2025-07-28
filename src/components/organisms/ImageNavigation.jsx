import "./ImageNavigation.css";
import Pattern from "../../assets/PatternDrawn.png";

export default function ImageNavigation({id, type}) {
    return (
        <div className={`image-navigation ${type}`}>
            <div className="patterns">
                <img src={Pattern} alt="Pattern" className="pattern-img" />
                <img src={Pattern} alt="Pattern" className="pattern-img" />
            </div>
        </div>
    );
}