const fetchPokeApiData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchPokeApiData();
