import PokemonCardOrganism from '../components/organisms/PokemonCardOrganism';
import '../components/styles/TypeBadgeAtom.css';

const TestTemplate = () => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        <PokemonCardOrganism
            id="001"
            name="Bulbasaur"
            types={["Grass", "Poison"]}
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        />
        <PokemonCardOrganism
            id="004"
            name="Charmander"
            types={["Fire"]}
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        />
    </div>
);

export default TestTemplate;