//assync await yapısı 
// promise zinciri probleminden kurtulmada işe yarar
// iç içe then kullanımılarda karmaşa oluşur .bunu önleriz async await ile 



function hello() {
    console.log("hello world");
}

hello(); //? bildiğimiz klasik yöntem



async function hello0() {   //! async ile fonku oluşturuyoruz

    return "Hello World!" // normalde bu string döner ama async yapınca promise formatında döner 
}

hello0() /// promise döner ( fonk async olunca )
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) })



// KOD TEMİZLİĞİ OLDUKÇA İYİ HALER GETİRİR






//? FETCH THEN  İLE KULLANIMI (BU DA OLDUKÇA UZUYABİLİYOR )



document.querySelector("#button").addEventListener("click", () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1") // promise döner
        .then((response) => response.json())//! tek satırda ve süslü parantez  parantez olmadan   return yazmaya gerek olamdığını belirtmiştik önceki derslerde 
        .then((post) => { // json da promise döner onu yakalıyoruz 
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`) // yorumları yakalamak için fetch atıyoruz 
                .then((response) => response.json()) // yorumlar prom            isesini yakaladık 

                .then((comments) => console.log(comments)) // yorumları yakaladık 
        })

        .catch((err) => { console.log(err) })


    console.log("butona basıldı")
})



//? ÜSTTEKİ YAPININ ASYNC AWAİT İLE KULLANIMI  ( DAHA BASİT )
// ! async await de promise dönen veriyi await ile bekletmek gereklidir ki senkron sorunları olmasın (örnek id çekilmeden  id ile işlem yapmak )
//! await basitçe promselerde gelecek veriyi bekle sonra devam et demek
document.querySelector("#button").addEventListener("click", async () => {

    //await sadece "async" fonksiyonlarad kullanılabilir fonksiyona yazdık 
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1") // ASENKRON ÇALIŞTIĞI İÇİN BEKLEMEK "AWAİT" İLE
    const post = await responsePost.json() // bu da promise döner await ile bekletmek zorundayız 

    const responeComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)

    const comments = await responeComment.json();
    console.log(post,comments)

})


// daha kısa hali tek te kçevirmek yerine araadımları atlayarak çevirme 

document.querySelector("#button").addEventListener("click", async () => {

    //await sadece "async" fonksiyonlarad kullanılabilir fonksiyona yazdık 
    const post = await((await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()) // ASENKRON ÇALIŞTIĞI İÇİN BEKLEMEK "AWAİT" İLE

    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()

    console.log(post,comments)

})
