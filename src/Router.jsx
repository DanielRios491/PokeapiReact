import { createBrowserRouter } from "react-router";
import App from "./App";
import MainLayout from "./components/pages/MainLayout";
import GameLayout from "./components/pages/GameLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout
    },
    {
        path: "/game",
        Component: GameLayout
    },
]);

export default Router;