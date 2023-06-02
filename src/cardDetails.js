import data from './data/pokemon/pokemon.js';
import stylesPokemon from './stylesPokemon.js';

const parametros = window.location.search;
const urlParams = new URLSearchParams(parametros)
const id = urlParams.get('id');

const pokemon = data.pokemon.filter((pk) => {
    return pk.num === id;
})[0];

let url = document.baseURI;
console.log(url)

const pokemonCard = document.getElementById("cardDetails");
const pokemonStyle = stylesPokemon.filter((style) =>{
    return pokemon.type.includes(style.typePokemon);
})

const pokemonName = document.getElementById("pokemonName");
const pokemonNumber = document.getElementById("pokemonNumber");
const pokemonImg = document.querySelector("#cardImg img");

pokemonCard.style.backgroundColor = pokemonStyle[0].color;
pokemonName.innerHTML = pokemon.name;
pokemonNumber.innerHTML = pokemon.num;
pokemonImg.src = pokemon.img;

const pokemonTypes = document.getElementById("pokemonType");

let types = "";
pokemonStyle.forEach(style => {
    types += `<div style="background-color: ${style.color}">${style.typePokemon}</div>`
});

pokemonTypes.innerHTML = types;

function openInfo(evt, info) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
  }

  const tabs = document.querySelectorAll(".tablinks")

tabs.forEach(element => {element.addEventListener("click", (e) => openInfo(e, element.value))
    
  });

  const about = document.getElementById("About")
  let aboutData = "<table>";
  aboutData += `<tr><td>Type:</td><td>${pokemon.type.join(", ")}</td></tr>`
  aboutData += `<tr><td>Weigth:</td><td>${pokemon.size.weight}</td></tr>`
  aboutData += `<tr><td>Heigth:</td><td>${pokemon.size.height}</td></tr>`
  aboutData += `<tr><td>About:</td><td>${pokemon.about}</td></tr>`
  aboutData += "</table>"
  about.innerHTML = aboutData;

  const baseStats = document.getElementById("Base-Stats")
  let baseStatsData = "<table>";
  baseStatsData += `<tr><td>Attack:</td><td>${pokemon.stats['base-attack']}</td></tr>`
  baseStatsData += `<tr><td>Defense:</td><td>${pokemon.stats['base-defense']}</td></tr>`
  baseStatsData += `<tr><td>Stamina:</td><td>${pokemon.stats['base-stamina']}</td></tr>`
  baseStatsData += `<tr><td>Max-Cp:</td><td>${pokemon.stats['max-cp']}</td></tr>`
  baseStatsData += `<tr><td>Max-Hp:</td><td>${pokemon.stats['max-hp']}</td></tr>`
  baseStatsData += "</table>"
  baseStats.innerHTML = baseStatsData;

  const attack = document.getElementById("Attack")
  let attackData = "<table>";
  attackData += `<tr><td>Name:</td><td>${pokemon['special-attack'][0].name}</td></tr>`
  attackData += `<tr><td>Type:</td><td>${pokemon['special-attack'][0].type}</td></tr>`
  attackData += `<tr><td>Damage:</td><td>${pokemon['special-attack'][0]['base-damage']}</td></tr>`
  attackData += `<tr><td>Energy:</td><td>${pokemon['special-attack'][0].energy}</td></tr>`
  attackData += `<tr><td>Resistant:</td><td>${pokemon.resistant.join(", ")}</td></tr>`
  attackData += `<tr><td>Weakness:</td><td>${pokemon.weaknesses.join(", ")}</td></tr>`
  attackData += "</table>"
  attack.innerHTML = attackData;