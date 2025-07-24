export default function GameOrganism({ pokemonState, handleAnswer }) {
    console.log(pokemonState, "estos son los pokemons")
    return <p>{ pokemonState.pokemonSelected.name }</p>
}