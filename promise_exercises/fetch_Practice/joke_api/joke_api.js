const laugh = document.getElementById("btnLaugh");
const random = document.getElementById("random");
const punchline = document.getElementById("punchline");
const catImg = document.getElementById("catImg");

const catAudio = new Audio("./assets/catAudio.mp3");

fetchJoke();

punchline.addEventListener("click", ()=>{
    punchline.style.color = "black";
    punchline.style.textShadow = "none";
});

laugh.addEventListener("click", laughing);

function laughing() {
  const p = document.getElementById("forLaugh");
  p.textContent = "HAHAHAHAHAHAHAHAHA!";
  p.style.fontSize = "32px";
  catAudio.play();
  catImg.style.display = "block";
}


async function fetchJoke(){
    try {
        const setup = document.getElementById("setup");
        const response = await fetch(`https://official-joke-api.appspot.com/random_joke`);
        if (!response.ok){
            throw new Error("Cant access");
        }
        const data = await response.json();
        setup.textContent = `Joke: ${data.setup}`;
        punchline.textContent = data.punchline;
        punchline.style.color = "transparent";
        punchline.style.textShadow = "0 0 5px rgba(0, 0, 0, 0.5)";
        document.getElementById('forLaugh').textContent = "";
        catImg.style.display = "none";
    }catch(error){
        console.error(error);
    }
}

random.addEventListener("click", fetchJoke);