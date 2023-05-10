import { computeStats, filterData, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';

//Só adiciona o addEventListener se o elemento for acionado
//Pegando elemento do input


//can use document here
const name = document.getElementById("namePokemon");

if (name) {
  name.addEventListener("input", () => {
    document.getElementById("pokemons").innerHTML = "";
    const namePokemon = document.getElementById("namePokemon").value;
    filterData(namePokemon, data);
  });
}//endIf

/*
const name = document.getElementById("namePokemon");

if (name) {
  name.addEventListener("input", () => {
    document.getElementById("pokemons").innerHTML = "";
    const namePokemon = document.getElementById("namePokemon").value.toLowerCase();
    filterData(namePokemon, data);
  });
}//endIf

//Só adiciona o addEventListener se o elemento for acionado
//Pegando elemento do botão pesquisar
*/
const searchType = document.getElementById("submit");
if (searchType) {
  searchType.addEventListener("click", () => {
    name.value = "";
    document.getElementById("pokemons").innerHTML = "";
    const sortBy = document.getElementById("sortBy").value;
    const orderBy = document.getElementById("orderBy").value;
    sortData(data, sortBy, orderBy);
  });
}//endIf

//Só adiciona o addEventListener se o elemento for acionado
//Pegando elemento do botão clique para descobrir o peso dos pokemons
const findPokemonWeight = document.getElementById("findPokemonWeight");
if (findPokemonWeight) {
  findPokemonWeight.addEventListener("click", () => {
    document.getElementById("pokemonsWeight").innerHTML = "";
    computeStats.findTheWeightPokemon(data);
  });
}//endIf

//Só adiciona o addEventListener se o elemento for acionado
//Pegando elemento do botão clique para descobrir a altura dos pokemons
const findPokemonHeight = document.getElementById("findPokemonHeight");
if (findPokemonHeight) {
  findPokemonHeight.addEventListener("click", () => {
    document.getElementById("pokemonsHeight").innerHTML = "";
    computeStats.findTheHeigthPokemon(data);
  });
}//endIf

//Só adiciona o addEventListener se o elemento for acionado
//Pegando elemento do botão clique para descobrir os tipos mais raros e comuns dos pokemons
const findPercentageOfTypesOfPokemons = document.getElementById("findPercentageOfTypesOfPokemons");
if (findPercentageOfTypesOfPokemons) {
  findPercentageOfTypesOfPokemons.addEventListener("click", () => {
    document.getElementById("chart").innerHTML = "";
    computeStats.calculatePokemonTypesInPercentages(data);
  });
}//endIf

//Função que constrói os cards dos pokémons
export const buildCard = (id, pokemon) => {

  const pokemons = document.getElementById(id);
  const cardPokemon = document.createElement('div');
  cardPokemon.classList.add("card", "fontCard");

  cardPokemon.innerHTML = `
    <img id="imagePokemon" alt="Image Pokemon" src="${pokemon.img}">
    <div class="showNamePokemon">
      <img class="pokeball" alt="Image Pokeball" src="./images/pokeball.png">
      <h1 id="name">${pokemon.name}</h1>
    </div>
    <div class="dataPokemon">
      <p>Type: <span id="type">${pokemon.type}</span> </p>
      <p>Height: <span id="type">${pokemon.size.height}</span> </p>
      <p>Weigth: <span id="type">${pokemon.size.weight}</span> </p>
    </div>
    `;

  if(pokemons){
    pokemons.appendChild(cardPokemon);
  }

}//endBuildCard

//Função que constrói o gráfico exibindo o percentual dos tipos de pokémons
export const plotChart = (typePokemon, width) => {
  const grafico = document.getElementById("chart");
  const dados = document.createElement('section');

  dados.innerHTML = `
    <div id="typeOfPokemon">
      <div id="tipo">${typePokemon}</div>
    </div>
    <div id="percentage">
      <div id="value" style="width: ${width}% "> ${width}% </div>
    </div> `;

  grafico.appendChild(dados);

}//endBuildScreen


document.querySelectorAll("header .home").forEach(
  item => {
    item.addEventListener("click", () => {
      return window.location = "./";
    })

  }
)

const menuMob = document.getElementById("menuMob");

if (menuMob) {
  menuMob.addEventListener("click", () => {
    const menu = document.querySelector("#navCel");
    menu.classList.toggle("active");
  })
}


//adicionando evento no carregamento da página
//trocar o elemento por window

window.addEventListener("load", () => {
  for (const pokemon in data.pokemon) {
    buildCard("pokemons", data.pokemon[pokemon]);
  }//enFor
});



