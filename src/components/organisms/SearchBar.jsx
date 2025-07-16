import "./SearchBar.css";
import LeftRightPattern from "../../assets/LeftRightPattern.png";
import RightLeftPattern from "../../assets/RightLeftPattern.png";
import SearchIcon from "../../assets/SearchIcon.png";
import TextInputAtom from "../atoms/TextInputAtom";

export default function SearchBar({onChange}) {
    return (
        <div className="search-bar">
            <div className="search-frame">
                <img src={LeftRightPattern} alt="LeftRightPattern" style={{width: "100%"}} />
                <div>
                    <div className="search-input-buton">
                        <img src={SearchIcon} alt="SearchIcon" />
                        <TextInputAtom onChange={onChange}/>
                    </div>
                </div>
                <img src={RightLeftPattern} alt="RightLeftPattern" style={{width: "100%"}} />
            </div>
            <p>Search for Pokémon by name or using the National Pokédex number.</p>
        </div>
    );
}