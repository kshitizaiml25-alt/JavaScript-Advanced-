function getPostData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Post Data Fetched...")
        }, 2000);
    })
}

function getCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment Data Fetched...")
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching Blog Data !!!");
        let postdata = await getPostData()
        let commentdata = await getCommentData()
        console.log(postdata);
        console.log(commentdata);
        console.log("Fetching Complete !!!");
        
    } catch (error) {
        console.log("Data Fetched Incomplete", error);
        
    }
}
getBlogData()