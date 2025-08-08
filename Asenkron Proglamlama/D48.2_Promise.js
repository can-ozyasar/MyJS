

// ? PROMİSE + XMLHTTPREQUEST

function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        try {
            xhr.addEventListener("readystatechange", () => {

                if (xhr.readyState === 4 && xhr.status == 200) {

                    try { //çevirmede json da hata oluşmasını da yakalayalım 
                        const students = JSON.parse(xhr.responseText);
                        resolve(students)

                    }
                    catch (error) {
                        console.log("JSON da hata var : ", error)
                    }

                }
            })
        }
        catch (error) {
            reject(error)

        }


        xhr.open("GET", url)
        xhr.send()
    })
}




readStudents("students.json")
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("finally çalıştı")
    })
