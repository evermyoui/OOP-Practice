import dotenv from "dotenv";
dotenv.config({ quiet: true });

const apiKey = process.env.API_KEY;

async function fetchWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
}