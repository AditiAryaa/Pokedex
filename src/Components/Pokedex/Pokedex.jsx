import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList.jsx";
import PokemonDetails from "../PokemonDetails/PokemonDetails.jsx";
// CSS import
import "./Pokedex.css";
import { useEffect, useState } from "react";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {}, [searchTerm]);

  return (
    <div className="pokedex-wrapper">
      <Search updateSearchTerm={setSearchTerm} />

      {!searchTerm ? (
        <PokemonList />
      ) : (
        <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
      )}
    </div>
  );
}

export default Pokedex;
