import { appState } from "../AppState.js"
import { pokesService } from "../Services/PokesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"
import { Pokemon } from "../Models/Pokemon.js"

function _drawPokemon() {

    let template = ''
    appState.pokemons.forEach(p => template += p.PokePokemonTemplate)
    setHTML('poke-pokemon', template)

}


export class PokesController {
    constructor() {
        this.getPokemon()
        appState.on('pokemons', _drawPokemon)
    }


    async getPokemon() {
        try {
            await pokesService.getPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }
    async getPokemonByName(url) {
        try {

            await pokesService.getPokemonByUrl(url)
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }
}
