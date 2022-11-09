//variables
const pokemon = document.getElementById("search")
const button = document.getElementById("button")
const display = document.getElementsByClassName("pokedex__search--pokemons")


const getPokemon = (pokemon) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        resolve(response);
        console.log(response)
      })
      .catch((error) => {
        reject(error);
    })
  })
};

const searchPokemon = (response) => {
  console.log(response)
  const id = response.data.id;
  console.log(id)
  display[0].innerHTML =
  `
  <div class="pokedex__search--pokemons--find">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png">
  </div>
  `
};

const showPokemon = (button, namePokemon) => {
  button.addEventListener("click", () => {
    getPokemon(namePokemon.value)
    .then(searchPokemon);
  })
}

showPokemon(button, pokemon);
