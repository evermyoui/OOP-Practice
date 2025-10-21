function checkInternet(){
    return new Promise((resolve,reject)=>{
        console.log("Checking Internet...");

        setTimeout(()=>{
            const randomNum = Math.random();
            console.log("Internet number: "+ randomNum.toFixed(2));
            if (randomNum > 0.5){
                resolve("Internet connected.");
            }else {
                reject("No internet connection.");
            }
        }, 1000);
    })
}

function downloadFile(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const randomNum = Math.random();
            console.log("Internet number: "+ randomNum.toFixed(2)); 
            if (randomNum > 0.3){
                resolve("Success Download.");
            }else {
                reject("Download failed.");
            }
        },2000)
    });
}

checkInternet()
.then((message)=> {
    console.log(message);
    return downloadFile();
})
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})