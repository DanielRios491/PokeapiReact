import { useState } from 'react';
import './GameOrganism.css';

export default function GameOrganism({ pokemonState, handleAnswer, handleNewRound }) {

    const [classImage, setClassImage] = useState(true);
    
    console.log(pokemonState.options, "estos son los pokemons")

    const handleClick = (name) => {
        setClassImage(!classImage);
        handleAnswer(name);
    }

    const handleNextRound = () => {
        setClassImage(!classImage)
        handleNewRound()
    }

    return (
        <div>
            <div>
                <span>{ pokemonState.score }</span>
                <br />
                <span>{ 3-pokemonState.attempts }</span>
            </div>
            <div>
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonState.pokemonSelected.id}.png`} 
                    alt="pokemonSelected" 
                    className={`${classImage ? "image-dark" : ""}`} 
                />
            </div>
            {
                classImage ? 
                <div>
                    {
                        pokemonState.options.map((item, index) => {
                            return <button key={index} onClick={() => handleClick(item.name)}>{item.name}</button>;
                        })
                    }
                </div> :
                <button onClick={() => handleNextRound()} >{pokemonState.gameOver ? "Start new game": "Next round"}</button>
            }
            
        </div>
    );
}