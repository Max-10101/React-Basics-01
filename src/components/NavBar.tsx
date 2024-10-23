interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({pokemonIndex, setPokemonIndex, pokemonList}: NavBarProps) {
  const prevPokemon = () => {
      setPokemonIndex(pokemonIndex - 1)
};

  const nextPokemon = () => {
      setPokemonIndex(pokemonIndex + 1)
};

  return (
      <div>
  {pokemonIndex > 0 && (
      <button type="button" onClick={prevPokemon}>Précédent</button>
  )}
  {pokemonIndex < pokemonList.length - 1 && (
      <button type="button" onClick={nextPokemon}>Suivant</button>
  )}
  </div>
);
}


export default NavBar;