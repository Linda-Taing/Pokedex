import { pokeApi, sandboxApi } from "./axiosService.js"
import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"

class PokesService {

    async getPokemon() {
        const res = await pokeApi.get()
        console.log('[GET POKEMON]', res.data)
        appState.pokemons = res.data.results.map(p => new Pokemon(p))

        console.log(appState.pokemons);
    }
    async getPokemonByUrl(url) {
        const res = await sandboxApi.get(url)
        console.log('DATA URL', res.data
        )

    }

}
export const pokesService = new PokesService()