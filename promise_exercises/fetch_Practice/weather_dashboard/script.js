import dotenv from "dotenv";
dotenv.config({ quiet: true });

const apiKey = process.env.API_KEY;

const city = document.querySelector(".city");

let info = [];
const inputSearch = document.querySelector(".input-search");




async function fetchWeather(){
    const input = inputSearch.value.toLowerCase();
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`);
        if (!response.ok){
            throw new Error("Cant access");
        }
        const data = await response.json();
        info = data;
        displayWeather();
    }catch(error){
        console.error(error);
    }
}

function displayWeather(){
    city.textContent = info.name;
    
}

fetchWeather();