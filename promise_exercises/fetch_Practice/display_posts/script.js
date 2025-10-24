const container = document.querySelector(".container");
const prev = document.querySelector(".prev");
prev.disabled = true;
const next = document.querySelector(".next");

let posts = [];
let startIndex = 0;

async function fetchPosts(){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.json();
        posts = data;

        displayPosts();
    }catch(error){
        console.error(error);
        
    }
}

function displayPosts(){
    container.innerHTML = "";
    const sliced = posts.slice(startIndex, startIndex+5);
    sliced.forEach(post =>{
        const div = document.createElement("div");
        div.style.marginBottom = "20px";
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
        `;
        container.appendChild(div);
    })
}

prev.addEventListener("click", ()=>{
    if(startIndex - 5 >= 0){
        startIndex-=5;
        displayPosts();
    }else{
        prev.disabled = true;
    }
});

next.addEventListener("click", ()=>{
    if(startIndex + 5 < posts.length){
        startIndex+=5;
        prev.disabled = false;
        displayPosts();
    }else{
        next.disabled = true;
    }
});

fetchPosts();
// 0
// body
// "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// id
// 1
// title
// "sunt 