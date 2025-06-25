export const fetchPokeApiData = async (setPokemons) => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0');
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPokemons(data.results)
        console.log('Fetched Data:', data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};