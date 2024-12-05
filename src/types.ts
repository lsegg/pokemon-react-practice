export interface Pokemon {
  id: number;
  name: string;
  type: string;
  experience: number;
}

export interface PokedexProps {
  pokemon: Pokemon[];
  exp: number;
  isWinner: boolean;
}
