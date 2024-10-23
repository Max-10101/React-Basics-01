
import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";



function App() {
  
  const [pokemonIndex, setPokemonIndex]= useState(0)
  
return(
 
<div>
<PokemonCard pokemon ={pokemonList[pokemonIndex]}/>
<div>

<NavBar  pokemonIndex={pokemonIndex}
         setPokemonIndex={setPokemonIndex}
         pokemonList={pokemonList}/>

</div>
</div>


)
 
}



const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
    },
  ];

export default App;