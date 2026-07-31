function fetchdata() {
    return new Promise ((resolve , reject) => {
        setTimeout(() => {
            let success = true;
            if (success == true) {
                resolve("Data Fetched Successfully");
            }
            else {
                reject("Error Fetching Data");
            }
        }, 3000);
    })
}

fetchdata()
    .then((data) => {
        console.log(data)
        return `Kshitiz Aman`})
    .then((value) => console.log(value))
    .catch((error) => console.log(error));