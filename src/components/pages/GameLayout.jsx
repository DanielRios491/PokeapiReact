import { useLoaderData } from "react-router";
import HeaderNavBar from '../organisms/HeaderNavBar';
import PokemonGameTemplate from '../templates/PokemonGameTemplate';
import './GameLayout.css';

const GameLayout = () => {
    const { species } = useLoaderData();
    const options = [
        { path: "/", label: "Game" },
        { path: "/", label: "Langs" },
        { path: "/pokedex", label: "Pokedex" },
    ];

    return (
        <div className='main-layout'>
            <HeaderNavBar options={options}/>
            <PokemonGameTemplate pokemons={species} />
        </div>
    );
};

export default GameLayout;