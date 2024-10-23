interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList}: NavBarProps) {
 const handleClcik = (index: number) => {setPokemonIndex(index)}
  return (
      <div>
 
 {pokemonList.map((pokemon,index)=>
 
 (<button key={index} type="button" onClick={ () => handleClcik(index)}> 
    {pokemon.name}
    
    
    </button>
  ))}
  </div>
);
}


export default NavBar;