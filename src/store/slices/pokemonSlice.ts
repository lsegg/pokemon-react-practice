import {createSlice} from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        game: {
            isLoading: false,
            player1: {
                hand: [
                    {id: 25, name: 'Pikachu', types: ['electric'], experience: 112},
                    {id: 39, name: 'Jigglypuff', types: ['normal'], experience: 95},
                    {id: 94, name: 'Gengar', types: ['poison'], experience: 225},
                    {id: 133, name: 'Eevee', types: ['normal'], experience: 65},
                ],
                exp: 497
            },
            player2: {
                hand: [
                    {id: 4, name: 'Charmander', types: ['fire'], experience: 62},
                    {id: 7, name: 'Squirtle', types: ['water'], experience: 63},
                    {id: 11, name: 'Metapod', types: ['bug'], experience: 72},
                    {id: 12, name: 'Butterfree', types: ['flying'], experience: 178},
                ],
                exp: 375
            }
        }
    },
    reducers: {
        startLoadingPokemon: (state, /* action */) => {
            state.game.isLoading = true;
        },
        setPokemon: (state, action) => {
            state.game.isLoading = false;
            state.game.player1 = action.payload.player1;
            state.game.player2 = action.payload.player2;
        }
    },
})

export const {startLoadingPokemon, setPokemon} = pokemonSlice.actions

export default pokemonSlice.reducer