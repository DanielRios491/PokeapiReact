export const fetchPokeApiData = async (limit = 20, offset = 0) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const { results } = await response.json();

        const detailPromises = results.map(async (r) => {
            const pokeRes = await fetch(r.url);
            const poke = await pokeRes.json();

            const speciesRes = await fetch(poke.species.url);
            const species = await speciesRes.json();

            return {
                    id: poke.id,
                    name: poke.name,
                    types: poke.types.map((t) => t.type.name),
                    color: species.color.name,
                };
        });

        const detailed = await Promise.all(detailPromises);
        return detailed;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
