import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h4 className="Pokedex-winner">Winning hand!</h4>;
    } else {
      title = <h4 className="Pokedex-loser">Losing hand!</h4>;
    }
    return (
      <div className="Pokedex">
        <h2>Pokedex</h2>
        <p>Total Experience: {this.props.exp}</p>
        {title}
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => {
            return (
              <Pokecard
                id={p.id}
                name={p.name}
                type={p.type}
                exp={p.base_experience}
              />
            )
          })}</div>
      </div>
    )
  }
};

export default Pokedex;