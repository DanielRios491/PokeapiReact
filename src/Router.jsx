import { createBrowserRouter } from "react-router";
import MainLayout from "./components/pages/MainLayout";
import GameLayout from "./components/pages/GameLayout";
import ListPokemonsTemplate from "./components/templates/ListPokemonsTemplate";
import PokemonInformation from "./components/templates/PokemonInformation";
import { getSpecies, fetchPokeApiData } from "./api/PokeApiConsumptio";
import { getFullPokemonData } from "./api/PokemonInfoApi";
import ErrorTemplate from "./components/templates/ErrorTemplate";

const Router = createBrowserRouter([
    {
        index: true,
        loader: async () => {
            return { species: await getSpecies()}
        },
        Component: GameLayout
    },
    {
        path: "/pokedex",
        Component: MainLayout,
        children: [
            {
                index: true,
                /* lazy: async () => {
                    const module = await import("./components/templates/ListPokemonsTemplate");
                    return {
                        loader: async () => {
                            return { pokemons: await fetchPokeApiData()}
                        },
                        Component: module.default,
                    };
                }, */
                loader: async () => {
                    return { pokemons: await fetchPokeApiData(60,0)}
                },
                Component: ListPokemonsTemplate,
                errorElement: ErrorTemplate
            },
            {
                path: ":pokemonId",
                loader: async ({ params }) => {
                    let pokemonInfo = await getFullPokemonData(params.pokemonId)
                    return { pokemonInfo };
                },
                Component: PokemonInformation,
                errorElement: ErrorTemplate
            }
        ]
    },
]);

export default Router;