import "./Pokecard.css";
import { Pokemon } from "../types";

const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

const Pokecard = ({ id, name, type, experience }: Pokemon) => {
  const imgSrc = `${POKE_API}${id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-img-container">
        <img src={imgSrc} alt={name} className="Pokecard-img" />
      </div>
      <h2 className="Pokecard-title">{name}</h2>
      <p className="Pokecard-data">
        Type: {type} <br />
        EXP: {experience}
      </p>
    </div>
  );
};

export default Pokecard;
