import {useDispatch} from 'react-redux';
import Pokedex from './Pokedex';
import {Game} from '../types';
import {useSelector} from 'react-redux';
import './Pokegame.css';
import {getPokemon} from '../store/slices';

const Pokegame = () => {
    const {game}: { game: Game } = useSelector((state: any) => state?.pokemon);
    const dispatch = useDispatch<any>();

    return (
        <>
            <div className="Pokegame-intro">
                <h1>Pokegame!</h1>
                <button
                    className="Pokegame-shuffle"
                    disabled={game.isLoading}
                    onClick={() => dispatch(getPokemon())}
                >
                    Shuffle
                </button>
                {game.isLoading && <p>Loading...</p>}
            </div>
            <div className="Pokegame-content">
                <Pokedex
                    pokemon={game.player1.hand}
                    exp={game.player1.exp}
                    isWinner={game.player1.exp > game.player2.exp}
                />
                <Pokedex
                    pokemon={game.player2.hand}
                    exp={game.player2.exp}
                    isWinner={game.player2.exp > game.player1.exp}
                />
            </div>
        </>
    );
};

export default Pokegame;
