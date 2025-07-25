import LanguageBarOrganism from '../organisms/LanguageBarOrganism';
import GameOrganism from '../organisms/GameOrganism';
import { useReducer, useEffect, useState } from "react";

const initialState = {
    pokemonSelected: null,
    options: [],
    score: 0,
    attempts: 0,
    gameOver: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "newRound":
            return {
                ...state,
                pokemonSelected: action.payload.selected,
                options: action.payload.options,
            };
        case "answer":
            return {
                ...state,
                score: action.payload.score,
                attempts: action.payload.nextAttempts,
                gameOver: action.payload.gameOver,
            };
        case "reset":
            return initialState;
        default:
            return state;
    }
}

export default function PokemonGameTemplate({ pokemons }) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [language, setLanguage] = useState("en")

    const randomPokemon = () => {
        const randomIndex = Math.floor(Math.random() * pokemons.length)
        return pokemons[randomIndex];
    }

    const randomOptions = (pokemonSelected) => {
        const pokemonsOptions = pokemons.filter(item => item !== pokemonSelected);
        pokemonsOptions.sort(() => Math.random() -0.5)
        return pokemonsOptions.slice(0,3);
    }

    const mixOptions = (pokemonSelected, options) => {
        const mixedOptions = [...options, pokemonSelected]
        return mixedOptions.sort(() => Math.random() -0.5);
    }
    
    const newRound = () => {
        const selected = randomPokemon();
        const options = mixOptions(selected, randomOptions(selected));
        dispatch({ type: "newRound", payload: { selected, options } });
    };

    const handleAnswer = (answer) => {
        const isCorrect = answer === state.pokemonSelected.name;
        const nextAttempts = state.attempts + 1;
        const score = isCorrect ? state.score + 1 : state.score;
        const gameOver = nextAttempts >= 3;
        dispatch({ type: "answer", payload: {nextAttempts, score, gameOver} });
        console.log(isCorrect, "es la respuesta")
    };

    const handleNewRound = () => {
        if (state.gameOver) {
            dispatch({ type: "reset"})
        }
        newRound();
    }

    useEffect(() => {
        newRound();
    }, []);

    return(
        <div className="game-template">
            <LanguageBarOrganism setLanguage={setLanguage}/>
            {(state.pokemonSelected !== null) && 
                <GameOrganism 
                    pokemonState={state} 
                    handleAnswer={handleAnswer} 
                    handleNewRound={handleNewRound} 
                    language={language}
                />
            }
        </div>
    );
}