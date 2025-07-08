import ListPokemonsTemplate from '../templates/ListPokemonsTemplate';
import HeaderNavBar from '../organisms/HeaderNavBar';

const MainLayout = () => {
    return (
        <div>
            <HeaderNavBar />
            <ListPokemonsTemplate />
        </div>
    );
};

export default MainLayout;