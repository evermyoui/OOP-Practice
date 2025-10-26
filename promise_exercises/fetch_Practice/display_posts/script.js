//importing documents
const container = document.querySelector(".container");
const counter = document.querySelector(".counter");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// variables
let posts = [];
const startIndex = 0;
const pageSize = 5;

//fetch function
async function fetchPosts(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        //error catching
        if (!response.ok){
            throw new Error("Can't Access");
        }
        //fetching data
        const data = await response.json();
        posts = data;
        //display 5 posts
        displayPosts();
        updatePosts();
    }catch(error){
        console.error(error);
    } 
}
//render function
function displayPosts(){
    //inializes container
    container.innerHTML = "";
    const sliced = posts.slice(startIndex, startIndex + pageSize);
    //creating each post
    sliced.forEach(post =>{
        const div = document.createElement("div");
        //div containment
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p class = "paragraph" style = "display: none;">${post.body}</p>
            <button class = "show-details">Show Details</button>
            <hr>
        `;
        //importing documents
        const paragraph = div.querySelector(".paragraph");
        const btn = div.querySelector(".show-details");
        // show details button
        btn.addEventListener("click", ()=>{
            paragraph.style.display = "block";
            btn.disabled = true;
            btn.textContent = `Details shown`;
        });
        //add to html
        container.appendChild(div);
    });
    updatePosts();
}
//update posts
function updatePosts(){
    // button working
    prev.disabled = startIndex === 0;
    next.disabled = startIndex + pageSize >= posts.length;
    
    // counter
    const currPage = (startIndex / pageSize) + 1;
    const lastPage = (posts.length / pageSize);
    counter.textContent = `Page ${currPage} of ${lastPage}`;
}

next.addEventListener()