const container = document.querySelector(".container");
let startIndex = 0;
const pokemons = [];
const pageSize = 10;

async function fetchData(){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${startIndex}/`);
        const data = await response.json();
        pokemons = data;

        displayPokemon();

        for (let i = 30; i<= 41; i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const data = await response.json();
        pokemons = data
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = data.sprites.front_default;

        const name = document.createElement("p");
        name.classList.add("name");
        name.textContent = data.name.toUpperCase();
        
        const type = document.createElement("p");
        type.classList.add("type");
        const typeName = data.types[0].type.name;
        type.textContent = `Type: ${typeName.slice(0,1).toUpperCase() + typeName.slice(1,typeName.length).toLowerCase()}`;
        
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(type);

        container.appendChild(card);
        }
        // console.log(data.types[0].type.name);
    }catch(error){
        console.error(error);
    }
}
function displayPokemon(){
    
}


fetchData();
