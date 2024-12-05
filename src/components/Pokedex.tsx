import './Pokedex.css';
import {Pokemon, PokedexProps} from '../types';
import Pokecard from './Pokecard';

const Pokedex = ({pokemon, exp, isWinner}: PokedexProps) => {
    const title = isWinner ?
        <h4 className="Pokedex-winner">Winning hand!</h4> :
        <h4 className="Pokedex-loser">Losing hand!</h4>;

    return (
        <div className="Pokedex">
            <div className="Pokedex-header">
                <div className="Pokedex-left">
                    <div className="Pokedex-button"></div>
                    <div className="Pokedex-data">
                        <h2 className="Pokedex-title">Pokedex</h2>
                        <p>Total Experience: {exp}</p>
                        {title}
                    </div>
                </div>
                <div className="Pokedex-right">
                    <button className="Pokedex-shuffle">Shuffle</button>
                </div>
            </div>
            <div className="Pokedex-cards">
                {pokemon.map((p: Pokemon) => (
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
