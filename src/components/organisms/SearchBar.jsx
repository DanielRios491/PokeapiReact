import "./SearchBar.css";
import LeftRightPattern from "../../assets/LeftRightPattern.png";
import RightLeftPattern from "../../assets/RightLeftPattern.png";
import SearchIcon from "../../assets/SearchIcon.png";

export default function SearchBar() {
    return (
        <div className="search-bar">
            <img src={LeftRightPattern} alt="LeftRightPattern" style={{width: "100%"}} />
            <div>
                <div>
                    <img src={SearchIcon} alt="SearchIcon" />
                    <input type="text" />
                </div>
                <p>esta sera una super barra para buscar poquemons</p>
            </div>
            <img src={RightLeftPattern} alt="RightLeftPattern" style={{width: "100%"}} />
        </div>
    );
}