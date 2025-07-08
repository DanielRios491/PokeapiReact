import "./HeaderNavBar.css";

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
                <button>Games</button>
                <button>Home</button>
                <button>Langs</button>
                <button>Pokedex</button>
            </div>
        </div>
    );
}