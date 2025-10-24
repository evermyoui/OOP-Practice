const dogImg = document.getElementById("dogImg");
const generateDogBtn = document.getElementById("generateDogBtn");

fetchDog();

async function fetchDog(){
    try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
        if (!response.ok){
            throw new Error("Can't access haha");
        }

        const data = await response.json();
        dogImg.src = data.message;
        dogImg.style.display = "block";
    }catch(error){
        console.error(error);
    }
}
generateDogBtn.addEventListener("click", fetchDog);