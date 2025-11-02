import dotenv from "dotenv";
dotenv.config({ quiet: true });

const apiKey = process.env.API_KEY;

let info = [];

async function fetchWeather(){
    const input = "athens";
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`);
        if (!response.ok){
            throw new Error("Cant access");
        }
        const data = await response.json();
        info = data;

        const time = {
                dt: info.dt,
                timezone: info.timezone
        }
const currTime = formatTime(time.dt, time.timezone);
console.log(currTime);

    }catch(error){
        console.error(error);
    }
}
fetchWeather();



function formatTime(dt,timezone){
    const date = new Date((dt + timezone) * 1000);
    let hour = date.getUTCHours().toString().padStart(2, "0");
    const min = date.getUTCMinutes().toString().padStart(2, "0");
    if (hour > 12){
        hour-=12;
        return `${hour}:${min} PM`
    }
}
