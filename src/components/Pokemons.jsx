import Pokemon from "./Pokemon";

const Pokemons = ({ pokemons, colors, main_types }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pokedex</h1>
      <div className="poke-container" id="poke-container">
        {pokemons.map((pokemon) => {
          const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
          const id = pokemon.id.toString().padStart(3, "0");

          const poke_types = pokemon.types.map((type) => type.type.name);
          const type = main_types.find((type) => poke_types.indexOf(type) > -1);
          const color = colors[type];

          return (
            <Pokemon
              pokemon={pokemon}
              type={type}
              color={color}
              name={name}
              id={id}
              key={id}
            />
          );
        })}
      </div>
    </>
  );
};
export default Pokemons;
