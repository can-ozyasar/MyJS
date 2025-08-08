

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

        xhr.open("GET", url)
        xhr.send();

    })
}






function getCommentsByUserID(url) {

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

        xhr.open("GET", url)
        xhr.send();

    })



}

getUsers("http://jsonplaceholder.typicode.com/users/3")
    .then((data) => {


        console.log(data.id)
        return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
        //? burdada bir değer dönüyor burada yakalayabiliriz then ile daha şık görünüm için dışarda yakalayalım



        // data.forEach(user => {
        //     console.log(user.name)

        // });
        // console.log(data)
        // console.log("daha sonra farklı asenkron kodlarını çalıştırabiliriz.")

    })
    .then((res) => { console.log(res) })
    .catch((err) => {

        console.log(err)
    })
    .finally(() => {

        console.log("herzamn çalışır finally bloğu ")
    })








//? promise resolve komutu kullanımı 




const p2 = Promise.resolve("ikinci promise başarılı ")
const p1 = Promise.resolve("birinci promise başarılı ")
const p3 = new Promise((resolve, reject) => {

    resolve("üçüncü promise başarılı")
})

const p4 = Promise.reject("hata var resizs !!!")


Promise.all(p1, p2, p3)// eğer tüm promiseler başarılı ise thene girer ,eğer tek bir promise dahi başarsız ise catch ye girer
    // dizi gibi veririz tüm promiseleri 
    .then((res) => {
        for (let value of res) {

            console.log(value)
        }
    })

    .catch((err) => { // bir tane bile hata varsa buraya girer
        console.log(err)

    })







