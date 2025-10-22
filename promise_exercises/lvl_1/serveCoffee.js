function boilWater(){
    return new Promise(resolve => {console.log("Water is boiling..."); 
        setTimeout(()=> resolve("Water boiled"), 1000)});
}
function brewCoffee(){
    return new Promise(resolve => {console.log("Brewing Coffee..."); 
        setTimeout(()=> resolve("Coffee Brewed"), 1000)});
}
function serveCoffee(){
    return new Promise(resolve => {console.log("Pouring Coffee..."); 
        setTimeout(()=> resolve("Coffee ready to serve"), 1000)});
}

function toastBread(){
    return new Promise(resolve => {console.log("Toasting Bread..."); 
        setTimeout(()=> resolve("Bread ready to serve"), 1000)});
}

async function serve(){
    try{
        const boil = await boilWater();
        console.log(boil);
        const brew = await brewCoffee();
        console.log(brew);
        const [coffee, bread] = await Promise.all([serveCoffee(), toastBread()]);
        console.log(coffee);
        console.log(bread);
    }catch{
        console.log("Failed to serve.");
    }
}

serve();