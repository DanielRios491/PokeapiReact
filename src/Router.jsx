import { createBrowserRouter } from "react-router";
import MainLayout from "./components/pages/MainLayout";
import GameLayout from "./components/pages/GameLayout";
import { getSpecies } from "./api/PokeApiConsumptio";

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
        lazy: async () => {
            const module = await import("./components/pages/MainLayout");
            return {
                Component: module.default,
            };
        },
        /* Component: MainLayout */
    },

]);

export default Router;