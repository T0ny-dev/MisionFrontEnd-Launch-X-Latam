//variables
const pokemon = document.getElementById("search")
const button = document.getElementById("button")
const display = document.getElementsByClassName("pokedex__search--pokemons")
const list = document.getElementById("list")


const getPokemon = (pokemon) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
    })
  })
};

const searchPokemon = (response) => {
  const id = response.data.id;
  const name = response.data.name;
  const skill=response.data.abilities[0].ability.name;
  const skill2=response.data.abilities[1].ability.name;
  const hp = response.data.stats[0].base_stat;
  const attack = response.data.stats[1].base_stat;
  const defense = response.data.stats[2].base_stat;
  const specialAttack = response.data.stats[3].base_stat;
  const specialDefense = response.data.stats[4].base_stat;
  const speed = response.data.stats[5].base_stat;

  display[0].innerHTML =
  `
  <div class="pokedex__search--pokemons--find">
    <div class="pokedex__search--pokemons--find__pokemon">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png">
      <div class="pokedex__search--pokemons--find__info">
        <h3>${name.toUpperCase()}</h2>
        <span>${skill}</span>
        <span>${skill2}</span>
      </div>
    </div>
      <h2>#${id}</h2>
    <div class="pokedex__search--pokemons--find__stats">
      <h3>Hp : ${hp}</h3>
      <div style="height: 5px;width:${hp}%;background-color: #04B590;border-radius: 50px;"></div>
      <h3>Attack : ${attack}</h3>
      <div style="height: 5px;width:${attack}%;background-color: #B40D1D;border-radius: 50px;"></div>
      <h3>Defense : ${defense}</h3>
      <div style="height: 5px;width:${defense}%;background-color: #1F83B5;border-radius: 50px;"></div>
      <h3>Special Attack : ${specialAttack}</h3>
      <div style="height: 5px;width:${specialAttack}%;background-color: #B5B01F;border-radius: 50px;"></div>
      <h3>Special Defense : ${specialDefense}</h3>
      <div style="height: 5px;width:${specialDefense}%;background-color: #024669;border-radius: 50px;"></div>
      <h3>Speed : ${speed}</h3>
      <div style="height: 5px;width:${speed}%;background-color: #AB04B5;border-radius: 50px;"></div>
    </div>
  </div>
  `
};

const dontFind = (error) => {
  if (error.response.data === "Not Found") {
    display[0].innerHTML =
  `
  <div class="pokedex__search--pokemons--error">
    <img src="../img/pokeball_icon_136305.png" alt="pokebola">
    <h2>Pokemon No Encontrado :( </h2>
  </div>
  `
  }
}

const showPokemon = (button, namePokemon) => {
  button.addEventListener("click", () => {
    getPokemon(namePokemon.value)
    .then(searchPokemon)
    .catch(dontFind);
  })
  pokemon.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      getPokemon(namePokemon.value)
      .then(searchPokemon)
      .catch(dontFind);
    }
  })
}

showPokemon(button, pokemon);

/*////////////// list pokemons //////////*/

const litsPokemons = () => {
  return new Promise((resolve, reject) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=100`)
      .then((response) => {
        resolve(response);
        console.log(response);
      })
      .catch((error) => {
        reject(error);
    })
  })
};



const showList = (response) => {
  const list = response.data.results;
  display[0].innerHTML = 
  `
    <div id="show" style="width: 100%; overflow-y: scroll; box-sizing: border-box">
      ${list.map((val, index) =>
      `
      <div style="display:flex;align-items: center;padding-left: 3vw;">
        <h2>#${index + 1}</h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png" alt="pokebola" height="50px" width="auto" style="margin-top: -15px;">
        <h2>${val.name}</h2>
      </div>`).join('')}
    </div>
  `
}

const showPokemons = (button) => {
  button.addEventListener("click", () => {
    litsPokemons()
    .then(showList)
    .catch(dontFind);
  })
}

showPokemons(list);