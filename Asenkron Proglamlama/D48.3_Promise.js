

function getUsers() {


    return new Promise(() => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {

            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            }
            catch (error) {
                reject(error)
            }
        })

        xhr.open("GET",url)
        xhr.send();

    })
}






function getCommentsByUserID(url){

 return new Promise(() => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {

            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            }
            catch (error) {
                reject(error)
            }
        })

        xhr.open("GET",url)
        xhr.send();

    })



}

getUsers("http://jsonplaceholder.typicode.com/users/3")
    .then((data) => {


        console.log(data.id)
        getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
        // data.forEach(user => {
        //     console.log(user.name)
            
        // });
        // console.log(data)
        // console.log("daha sonra farklı asenkron kodlarını çalıştırabiliriz.")

    })
    .catch((err) => {

        console.log(err)
    })
    .finally(() => {

        console.log("herzamn çalışır finally bloğu ")
    })