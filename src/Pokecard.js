import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <div className="Pokecard-img-container">
          <img src={imgSrc} alt={this.props.name} className="Pokecard-img" />
        </div>
        <h2 className="Pokecard-title">{this.props.name}</h2>
        <p className="Pokecard-data">
          Type: {this.props.type} <br />
          EXP: {this.props.exp}</p>
      </div>
    );
  }
}
export default Pokecard;