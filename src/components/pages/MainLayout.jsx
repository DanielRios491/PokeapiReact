import { Outlet } from "react-router";
import ListPokemonsTemplate from '../templates/ListPokemonsTemplate';
import HeaderNavBar from '../organisms/HeaderNavBar';
import './MainLayout.css'

const MainLayout = () => {

    const options = [
        { path: "/", label: "Home" },
        { path: "/types", label: "Types" },
        { path: "/generations", label: "Generations" },
    ];

    return (
        <div className='main-layout'>
            <HeaderNavBar options={options}/>
            <Outlet />
        </div>
    );
};

export default MainLayout;