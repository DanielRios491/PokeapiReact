import { useLoaderData } from "react-router";

export default function PokemonInformation() {
    const { pokemonId } = useLoaderData();
    return <div>{`Aqui ira la informacion del pokemons ${pokemonId}`}</div>
}