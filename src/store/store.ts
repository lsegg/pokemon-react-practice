import {configureStore} from "@reduxjs/toolkit";
import {pokemonSlice} from "./slices"

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer
    }
})