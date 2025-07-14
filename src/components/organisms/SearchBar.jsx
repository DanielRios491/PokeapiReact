import "./SearchBar.css";
import LeftRightPattern from "../../assets/LeftRightPattern.png";
import RightLeftPattern from "../../assets/RightLeftPattern.png";
import SearchIcon from "../../assets/SearchIcon.png";
import TextInputAtom from "../atoms/TextInputAtom";

export default function SearchBar() {
    return (
        <div className="search-bar">
            <img src={LeftRightPattern} alt="LeftRightPattern" style={{width: "100%"}} />
            <div>
                <div>
                    <TextInputAtom />
                    <img src={SearchIcon} alt="SearchIcon" />
                </div>
                <p>Search for Pokémon by name or using the National Pokédex number.</p>
            </div>
            <img src={RightLeftPattern} alt="RightLeftPattern" style={{width: "100%"}} />
        </div>
    );
}