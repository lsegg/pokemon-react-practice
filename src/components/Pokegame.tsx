import { useEffect, useState } from "react";
import Pokedex from "./Pokedex";
import { Pokemon } from "../types";

const Pokegame = () => {
  const pokemons: Pokemon[] = [
    { id: 4, name: "Charmander", type: "fire", experience: 62 },
    { id: 7, name: "Squirtle", type: "water", experience: 63 },
    { id: 11, name: "Metapod", type: "bug", experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", experience: 95 },
    { id: 94, name: "Gengar", type: "poison", experience: 225 },
    { id: 133, name: "Eevee", type: "normal", experience: 65 },
  ];

  const [hand1, setHand1] = useState<Pokemon[]>([]);
  const [hand2, setHand2] = useState<Pokemon[]>(pokemons);

  useEffect(() => {
    let tempHand1 = [];
    let tempHand2 = [...pokemons];

    while (tempHand1.length < tempHand2.length) {
      const randIndex = Math.floor(Math.random() * tempHand2.length);
      const randPokemon = tempHand2.splice(randIndex, 1)[0];
      tempHand1.push(randPokemon);
    }

    setHand1(tempHand1);
    setHand2(tempHand2);
  }, []);

  const expReducer = (exp: number, pokemon: Pokemon) =>
    exp + pokemon.experience;
  const exp1 = hand1.reduce(expReducer, 0);
  const exp2 = hand2.reduce(expReducer, 0);

  return (
    <>
      <h1>Pokegame!</h1>
      <Pokedex pokemons={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemons={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </>
  );
};

export default Pokegame;
