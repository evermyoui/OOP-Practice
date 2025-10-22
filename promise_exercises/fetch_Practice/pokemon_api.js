async function fetchData(){
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        if(!response.ok){
            throw new Error("Could not access");
        }
        const data = await response.json();
        
    }catch(error){
        console.error(error);
    }
}