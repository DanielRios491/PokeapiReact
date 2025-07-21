import { createBrowserRouter } from "react-router";
import MainLayout from "./components/pages/MainLayout";
import GameLayout from "./components/pages/GameLayout";
import { getSpecies } from "./api/PokeApiConsumptio";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout
    },
    {
        path: "/game",
        loader: async () => {
            return { species: await getSpecies()}
        },
        Component: GameLayout
    },
]);

export default Router;