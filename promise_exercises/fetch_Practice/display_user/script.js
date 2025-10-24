const list = document.getElementById("list");
const searchInput = document.getElementById("searchInput");

async function fetchUsers(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        
        render(data);

        searchInput.addEventListener("input", ()=>{
            const search = searchInput.value.toLowerCase();
            const filtered = data.filter(user => user.name.toLowerCase().includes(search) || user.email.toLowerCase().includes(search));

            render(filtered);
        })
        
    }catch(error){
        console.error(error);
    }
}

function render(users){
    list.innerHTML = "";
    users.forEach(user =>{
        const strong = document.createElement("strong");
        strong.textContent = user.name;

        const p = document.createElement("p");
        p.textContent = user.email;

        list.appendChild(strong);
        list.appendChild(p);
    })
}

fetchUsers();