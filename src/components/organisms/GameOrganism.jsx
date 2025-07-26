import { useState } from 'react';
import './GameOrganism.css';
import ButtonAtom from '../atoms/ButtomAtom';
import PokemonImage from '../atoms/PokemonImage';
import StatusDisplay from '../molecules/StatusDisplay';

export default function GameOrganism({ pokemonState, handleAnswer, handleNewRound, language }) {

    const [classImage, setClassImage] = useState(true);

    const handleClick = (name) => {
        setClassImage(!classImage);
        handleAnswer(name);
    }

    const handleNextRound = () => {
        setClassImage(!classImage)
        handleNewRound()
    }

    const nameLanguage = (names) => {
        if (!names) return "";
        const resultName = names.find((item) => item.language.name === language);
        return resultName ? resultName.name : "";
    }

    return (
        <div className='game-container'>
            <div className={`status ${pokemonState.result}`}>
                <StatusDisplay score={pokemonState.score} attempts={3-pokemonState.attempts} result={pokemonState.result} />
            </div>
            <div className='pokemon-image'>
                <PokemonImage pokemonId={pokemonState.pokemonSelected.id} dark={classImage} />
            </div>
            {
                classImage ? 
                <div className='option-buttons'>
                    {
                        pokemonState.options.map((item, index) => {
                            const nameGetted = nameLanguage(item.names);
                            return <ButtonAtom 
                                        key={index}
                                        onClick={() => handleClick(item.name)}
                                        classname='red-button'>
                                            {nameGetted}
                                    </ButtonAtom>;
                        })
                    }
                </div> :
                <ButtonAtom 
                    onClick={() => handleNextRound()} 
                    classname='red-button'>
                        {pokemonState.gameOver ? "Start new game": "Next round"}
                </ButtonAtom>
            }
            
        </div>
    );
}