import LanguageBarOrganism from '../organisms/LanguageBarOrganism';
import GameOrganism from '../organisms/GameOrganism';

export default function PokemonGameTemplate({ pokemons }) {
    return(
        <div className="game-template">
            <LanguageBarOrganism />
            <GameOrganism pokemons={pokemons} />
        </div>
    );
}