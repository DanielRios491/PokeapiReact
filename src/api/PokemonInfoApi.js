export const getFullPokemonData = async (pokemonId) => {
    const API = "https://pokeapi.co/api/v2";

    const pokemonRes = await fetch(`${API}/pokemon/${pokemonId}`);
    if (!pokemonRes.ok) throw new Error("Pokémon no encontrado");
    const pokemonData = await pokemonRes.json();

    const { id, height, weight, abilities, stats, types } = pokemonData;

    const speciesRes = await fetch(`${API}/pokemon-species/${id}`);
    const speciesData = await speciesRes.json();

    const evolutionRes = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionRes.json();

    const typeCalls = types.map(t => fetch(`${API}/type/${t.type.name}`).then(r => r.json()));
    const typeData = await Promise.all(typeCalls);

    const weaknesses = [
        ...new Set(
            typeData.flatMap(t => t.damage_relations.double_damage_from.map(d => d.name))
        ),
    ];

    return {
        id,
        name: pokemonData.name,
        generation: speciesData.generation.name,
        species: speciesData.genera.find(g => g.language.name === "en").genus,
        height,
        weight,
        abilities: abilities.map(a => a.ability.name),
        stats: stats.map(s => ({ name: s.stat.name, base: s.base_stat })),
        types: types.map(t => t.type.name),
        weaknesses,
        evolutionChain: extractEvolutionChain(evolutionData.chain),
        flavor_text: speciesData.flavor_text_entries.find(f => f.version.name === "sapphire")?.flavor_text
    };
}

function extractEvolutionChain(chain) {
    const result = [];

    function traverse(node) {
        result.push(node.species.name);
        if (node.evolves_to.length > 0) {
        node.evolves_to.forEach(child => traverse(child));
        }
    }

    traverse(chain);
    return result;
}

// getFullPokemonData(1).then(console.log).catch(console.error);
