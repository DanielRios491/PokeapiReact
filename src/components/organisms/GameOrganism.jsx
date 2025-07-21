export default function GameOrganism({ pokemons }) {
    console.log(pokemons, "estos son los pokemons")
    return <p>{ pokemons[0].name }</p>
}