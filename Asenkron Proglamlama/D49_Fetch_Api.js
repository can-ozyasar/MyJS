/// fetch api kulllanımı 
// promise ile birlikte kullanılır 

function getStudents(url) {
    //? const promise= fetch(url)// geriye promise döner 
    //?console.log(promise)

    fetch(url)   //! bir response dönüyor then catch ile yakalamak lazım
        .then((response) => {  //! fetch yi yakaladık
            return response.json()   //! bu da bir response dönüyor  (return yazmak zorunda değiliz)
        })
        .then((data) => {      //! json için de bir yakalama yaptık 
            console.log(data)
        })
        .catch((err) => { console.log(err) })



}
getStudents("students.json") // şuanda bu response tipinde bir değer döner 






//? tüm veriler için ortak bir kod 




function getData(url) {


    fetch(url)
        .then((response) => {
            return response.json() //! burada return yazmak zorunda değiliz 
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => { console.log(err) })



}

getData("https://jsonplaceholder.typicode.com/users")





console.log(`
    
    `)
//? bu kodu şu şekilde de yazabiliriz 



function getData1(url) {

    return fetch(url) // response tipinde bir değer döner fetch onu döndürdük bizde 

}

getData1("https://jsonplaceholder.typicode.com/albums") // fetch den dönen respons tipindeki veriyi döner burası
    .then((response) => {    // dönen responseyi yakaladık ve response olan başka bir veriyi döndürdük
        return response.json()  // ! burada return yazmak zorunda değiliz 
    })
    .then((data) => {  // json u yakalafık 
        console.log(data)
    })
    .catch((err) => { console.log(err) }) // error yakaladık



//? şimdiye kadar hep get isteği gönderdik şimdi ise post isteği atacağız





function saveStudents() {


    fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        headers: {
            "Content-Type ": "application/json"
        }, 
        body: JSON.stringify({

            "id": 2,
            firstname: "harun",
            "lastname": "taştan"
        })

    }) // fetch den dönen respons tipindeki veriyi döner burası

}