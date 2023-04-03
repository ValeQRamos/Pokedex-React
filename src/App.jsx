import { useState, useEffect } from "react";
import axios from "axios";

import Pokemons from "./components/Pokemons";
function App() {
  const [pokemons, setPokemons] = useState([]);

  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  };

  const main_types = Object.keys(colors);

  const fetchData = async () => {
    let num = 1;
    let arr = [];

    while (num <= 150) {
      const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${num}`);
      arr.push(data);
      num++;
    }
    setPokemons(arr);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Pokemons pokemons={pokemons} main_types={main_types} colors={colors} />
  );
}

export default App;
