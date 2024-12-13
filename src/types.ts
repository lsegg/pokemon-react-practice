export interface Game {
  isLoading: boolean;
  player1: Player;
  player2: Player;
}

export interface Player {
  hand: Pokemon[];
  exp: number;
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  experience: number;
}

export interface PokedexProps {
  pokemon: Pokemon[];
  exp: number;
  isWinner: boolean;
}
