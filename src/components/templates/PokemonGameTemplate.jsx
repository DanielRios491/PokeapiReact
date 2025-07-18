import LanguageBarOrganism from '../organisms/LanguageBarOrganism';
import GameOrganism from '../organisms/GameOrganism';

export default function PokemonGameTemplate() {
    return(
        <div className="game-template">
            <LanguageBarOrganism />
            <GameOrganism />
        </div>
    );
}