import { createBrowserRouter } from "react-router";
import MainLayout from "./components/pages/MainLayout";
import GameLayout from "./components/pages/GameLayout";
import ListPokemonsTemplate from "./components/templates/ListPokemonsTemplate";
import PokemonInformation from "./components/templates/PokemonInformation";
import { getSpecies, fetchPokeApiData } from "./api/PokeApiConsumptio";

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
                    return { pokemons: await fetchPokeApiData()}
                },
                Component: ListPokemonsTemplate,
            },
            {
                path: ":pokemonId",
                loader: async ({ params }) => {
                    // params are available in loaders/actions
                    // let team = await fetchTeam(params.teamId);
                    return { pokemonId: params.pokemonId };
                },
                Component: PokemonInformation,
            }
        ]
    },
]);

export default Router;