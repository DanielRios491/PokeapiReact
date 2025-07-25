import HeaderNavBar from '../organisms/HeaderNavBar';
import PokemonGameTemplate from '../templates/PokemonGameTemplate';
import './GameLayout.css';
import { useLoaderData } from "react-router";

const GameLayout = () => {
    const { species } = useLoaderData();
    const options = [
        { path: "/game", label: "Game" },
        { path: "/game", label: "Langs" },
        { path: "/", label: "Pokedex" },
    ];

    return (
        <div className='main-layout'>
            <HeaderNavBar options={options}/>
            <PokemonGameTemplate pokemons={species} />
        </div>
    );
};

export default GameLayout;