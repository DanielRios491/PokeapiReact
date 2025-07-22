import HeaderNavBar from '../organisms/HeaderNavBar';
import PokemonGameTemplate from '../templates/PokemonGameTemplate';
import './GameLayout.css';
import { useLoaderData } from "react-router";

const GameLayout = () => {
    const { species } = useLoaderData();

    return (
        <div className='main-layout'>
            <HeaderNavBar options={["Game", "Langs", "Pokedex"]}/>
            <PokemonGameTemplate pokemons={species.results} />
        </div>
    );
};

export default GameLayout;