export class Pokemon {
    constructor(data) {
        // this.id = data.id || null
        this.name = data.name
        this.url = data.url




    }

    get PokePokemonTemplate() {
        return `  <div class="col-12 text-center">
        <button onclick="app.pokesController.getPokemonByName('${this.url}')" class="btn btn-outline-danger w-75 fw-bold">${this.name}</button>
        </div>
        `
    }
}