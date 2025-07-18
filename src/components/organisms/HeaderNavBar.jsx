import "./HeaderNavBar.css";
import ButtomAtom from "../atoms/ButtomAtom";

export default function HeaderNavBar({options}) {
    return (
        <div className="header-navbar">
            <div className="icon-logo">
                <img
                    src="https://raw.githubusercontent.com/waydelyle/pokemon-assets/master/assets/svg/pokeball.svg"
                    alt="pokeball"
                />
                <h1>Pokedex</h1>
            </div>
            <div>
                <ButtomAtom>{options[0]}</ButtomAtom>
                <ButtomAtom>{options[1]}</ButtomAtom>
                <ButtomAtom>{options[2]}</ButtomAtom>
            </div>
        </div>
    );
}