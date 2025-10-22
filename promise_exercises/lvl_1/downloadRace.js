function file1(){
    return new Promise(resolve => {
        const randomDelay = (Math.random() + 1).toFixed(2);
        setTimeout(()=>{
            resolve("File 1 Downloaded.")
        },randomDelay);
    })
}
function file2(){
    return new Promise(resolve => {
        const randomDelay = (Math.random() + 1).toFixed(2);
        setTimeout(()=>{
            resolve("File 2 Downloaded.")
        },randomDelay);
    })
}
function file3(){
    return new Promise(resolve => {
        const randomDelay = (Math.random() + 1).toFixed(2);
        setTimeout(()=>{
            resolve("File 3 Downloaded.")
        },randomDelay);
    })
}
async function fastDownload(){
    const fastest = await Promise.allSettled([file1(), file2(), file3()]);
    console.log(fastest);
}

fastDownload();