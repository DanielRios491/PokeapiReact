import PropTypes from "prop-types";
import './PokemonImage.css';

export default function PokemonImage({
    pokemonId,
    dark = true,
    name = "Pokémon",
    ...props
}) {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

    return (
        <img
            src={imageUrl}
            alt={name}
            className={`${dark ? "image-dark" : ""}`}
            {...props}
        />
    );
}

PokemonImage.propTypes = {
    pokemonId: PropTypes.number.isRequired,
    dark: PropTypes.bool,
    name: PropTypes.string,
};