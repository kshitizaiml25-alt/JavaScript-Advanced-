function fetchdata() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve("name: Kshitiz , url : http://kshitizaman.com ")
        }, 3000);
    })
}
async function getuserdata() {
    try {
        console.log("Data Fetched Successfully...");
        const userdata = await fetchdata()
        console.log("Data:", userdata);
    } catch (error) {
        console.log("Error Fetching Data:", userdata);
        
    }
}
getuserdata()