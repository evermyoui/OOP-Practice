const not2Secs = false;
const true2Secs = true;

function downloadFile(){
    return new Promise((resolve, reject) =>{
        if (true2Secs){
            resolve("File downloaded successfully");
        }else {
            reject("Download Failed!");
        }
    })
}
downloadFile().then((message) => {
    console.log("Downloading File ... \n" +message);
}).catch((message) => {
    console.log("Downloading File ... \n" +message);
});