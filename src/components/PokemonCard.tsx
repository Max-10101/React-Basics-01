
function PokemonCard (){
  const pokemon = pokemonList[1]
 
 
  return (
    

  <figure>
    {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt="image du pokemon" />)
: 
(<p>????</p>)
}

  <figcaption>{pokemon.name}</figcaption>

  </figure>
  )

  
}

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];







export default PokemonCard;