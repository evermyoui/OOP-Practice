const container = document.querySelector(".container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const pageCounter = document.querySelector(".pageCounter");

let startIndex = 0;
let pokemons = [];
const TOTAL_POKEMONS = 1010;
const pageSize = 12;

async function fetchData(){
    try{
        pokemons = [];
        for (let i = startIndex + 1; i<= startIndex+ pageSize; i++){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            const data = await response.json();
            pokemons.push(data);
        }
        displayPokemon();
        updatePokemons();
    }catch(error){
        console.error(error);
    }
}
function displayPokemon(){
    container.innerHTML = "";
    pokemons.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = pokemon.sprites.front_default;

        const name = document.createElement("p");
        name.classList.add("name");
        name.textContent = pokemon.name.toUpperCase();
        const type = document.createElement("p");
        type.classList.add("type");
        const typeName = pokemon.types[0].type.name;
        type.textContent = `Type: ${typeName.slice(0,1).toUpperCase() + typeName.slice(1,typeName.length).toLowerCase()}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(type);

        container.appendChild(card);
    })
}
function updatePokemons(){
    prev.disabled = startIndex === 0;
    next.disabled = startIndex + pageSize >= TOTAL_POKEMONS;

    const currPage = Math.floor(startIndex / pageSize) + 1;
    const lastPage = Math.ceil(TOTAL_POKEMONS / pageSize);

    pageCounter.textContent = `Page ${currPage} of ${lastPage}`;
}

prev.addEventListener("click", () =>{
    if (startIndex - pageSize >= 0){
        startIndex -= pageSize;
        fetchData();
    }
})
next.addEventListener("click", () =>{
    if (startIndex + pageSize < TOTAL_POKEMONS){
        startIndex+= pageSize;
        fetchData();
    }
})

fetchData();