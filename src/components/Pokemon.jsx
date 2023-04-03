const Pokemon = ({ pokemon, id, type, color, name }) => {
  return (
    <div
      className="pokemon"
      key={pokemon.id}
      style={{ backgroundColor: color }}
    >
      <div className="img-container" key={pokemon.id}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
      </div>
      <div className="info">
        <span className="number">#{id} </span>
        <h3 className="name"> {name} </h3>
        <small className="type">
          Type: <span> {type} </span>
        </small>
      </div>
    </div>
  );
};
export default Pokemon;
