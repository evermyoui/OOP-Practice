import dotenv from "dotenv";
dotenv.config({ quiet: true });

const apiKey = process.env.API_KEY;

// const inputSearch = document.querySelector(".input-search");




async function fetchWeather(){
    // const input = inputSearch.value.toLowerCase();
    const input = "athens";
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`);
        if (!response.ok){
            throw new Error("Cant access");
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

fetchWeather();