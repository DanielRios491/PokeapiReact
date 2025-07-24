import { useState } from 'react';
import './GameOrganism.css';

export default function GameOrganism({ pokemonState, handleAnswer }) {

    const [classImage, setClassImage] = useState("image-dark");
    /* const classImage = "image-dark"; */
    console.log(pokemonState.options, "estos son los pokemons")

    const handleClick = (name) => {
        setClassImage("");
        handleAnswer(name);
    }

    return (
        <div>
            <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} alt="pokemonSelected" className={`${classImage}`} />
            </div>
            <div>
                {
                    pokemonState.options.map((item, index) => {
                        return <button key={index} onClick={() => handleClick(item.name)}>{item.name}</button>;
                    })
                }
            </div>
        </div>
    );
}