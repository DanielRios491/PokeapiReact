import ListPokemonsTemplate from '../templates/ListPokemonsTemplate';
import HeaderNavBar from '../organisms/HeaderNavBar';
import './MainLayout.css'

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <HeaderNavBar />
            <ListPokemonsTemplate />
        </div>
    );
};

export default MainLayout;