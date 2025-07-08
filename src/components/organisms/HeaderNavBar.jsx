import "./HeaderNavBar.css";
import ButtomAtom from "../atoms/ButtomAtom";

export default function HeaderNavBar() {
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
                <ButtomAtom>Home</ButtomAtom>
                <ButtomAtom>Types</ButtomAtom>
                <ButtomAtom>Generations</ButtomAtom>
            </div>
        </div>
    );
}