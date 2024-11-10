import "./Pokedex.css";
import { Pokemon, PokedexProps } from "../types";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemons, exp, isWinner }: PokedexProps) => {
  let title;
  if (isWinner) {
    title = <h4 className="Pokedex-winner">Winning hand!</h4>;
  } else {
    title = <h4 className="Pokedex-loser">Losing hand!</h4>;
  }

  return (
    <div className="Pokedex">
      <h2>Pokedex</h2>
      <p>Total Experience: {exp}</p>
      {title}
      <div className="Pokedex-cards">
        {pokemons.map((p: Pokemon) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            experience={p.experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
