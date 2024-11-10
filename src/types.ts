export interface Pokemon {
  id: number;
  name: string;
  type: string;
  experience: number;
}

export interface PokedexProps {
  pokemons: Pokemon[];
  exp: number;
  isWinner: boolean;
}
