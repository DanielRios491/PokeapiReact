// TestPage.js
import React from 'react';
import ListPokemonsTemplate from '../templates/ListPokemonsTemplate';
import HeaderNavBar from '../organisms/HeaderNavBar';

const TestPage = () => {
    return (
        <div>
            <HeaderNavBar />
            <ListPokemonsTemplate />
        </div>
    );
};

export default TestPage;