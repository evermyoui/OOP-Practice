function boilRice (){
    return new Promise(resolve =>{
        console.log("Rice is Boiling...");
        setTimeout(()=>{
            resolve("Rice is Cooked!");
        }, 2000);
    })
}

async function cookRice(){
    const msg = await boilRice();
    console.log(msg);
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Rice is ready to serve. ")
        }, 1000);
    })
}

async function serveRice(){
    const msg = await cookRice();
    console.log(msg);
};

serveRice();