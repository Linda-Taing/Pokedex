export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=20',
    timeout: 5000
})

export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api',
    timeout: 3000
})