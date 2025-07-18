import HeaderNavBar from '../organisms/HeaderNavBar';
import PokemonGameTemplate from '../templates/PokemonGameTemplate';
/* import './GameLayout.css'; */

const GameLayout = () => {
    return (
        <div className='main-layout'>
            <HeaderNavBar options={["Game", "Langs", "Pokedex"]}/>
            <PokemonGameTemplate />
        </div>
    );
};

export default GameLayout;