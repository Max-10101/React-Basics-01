
import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";



function App() {
  const [pokemonIndex, setPokemonIndex]= useState(0)
  const nextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1 );
  };
  const prevPokemon = () => {
    setPokemonIndex( pokemonIndex - 1  );
  };
return(
 
<div>
<PokemonCard pokemon ={pokemonList[pokemonIndex]}/>
<div>
 {pokemonIndex > 0  ?  (<button onClick={prevPokemon}>Précédent</button>)  : ""  }
{pokemonIndex < pokemonList.length - 1 ? (<button onClick={nextPokemon}>Suivant</button>) : ""}

</div>
</div>


)
 
}



const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App;