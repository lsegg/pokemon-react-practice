import {setPokemon, startLoadingPokemon} from './pokemonSlice.ts';
import {generateRandomIntegers, sumArray} from '../../utils';
import {Pokemon} from '../../types.ts';
import {pokemonAPI} from '../../api/pokemonAPI.ts';
const POKEMON_HAND_SIZE= 4;
const TOTAL_POKEMON = 1025;

export const getPokemon = () => {
    return async (dispatch: any) => {
        dispatch(startLoadingPokemon());

        const pokemonIDs: number[] = generateRandomIntegers(POKEMON_HAND_SIZE * 2, TOTAL_POKEMON);
        const pokemon: Pokemon[] = []

        for(const pokemonID of pokemonIDs) {
            const resp = await pokemonAPI.get(`/pokemon/${pokemonID}`);

            pokemon.push({
                id: pokemonID,
                name: resp.data.name,
                types: resp.data.types.map((slot: any) => slot.type.name),
                experience: resp.data.base_experience,
            })
        }

        dispatch(setPokemon({
            player1: {
                hand: pokemon.slice(0, POKEMON_HAND_SIZE),
                exp: sumArray(pokemon.slice(0, POKEMON_HAND_SIZE).map(p => p.experience))
            },
            player2: {
                hand: pokemon.slice(POKEMON_HAND_SIZE),
                exp: sumArray(pokemon.slice(POKEMON_HAND_SIZE).map(p => p.experience))
            },
        }));
    }
}