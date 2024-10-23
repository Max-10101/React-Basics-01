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
  const handleClick = (index: number) => {
    setPokemonIndex(index);
    if (pokemonList[index].name === "Pikachu") {
      alert("Pika pikachu!");
    }
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} type="button" onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;