import data from './data/pokemon/pokemon.js';

const parametros = window.location.search;
const urlParams = new URLSearchParams(parametros)
const id = urlParams.get('id');

const pokemon = data.pokemon.filter((pk) => {
    return pk.num === id;
})[0];

console.log(id);
console.log(pokemon);

