import ListPokemonsTemplate from '../templates/ListPokemonsTemplate';
import HeaderNavBar from '../organisms/HeaderNavBar';
import './MainLayout.css'

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <HeaderNavBar options={["Home", "Types", "Generations"]}/>
            <ListPokemonsTemplate />
        </div>
    );
};

export default MainLayout;