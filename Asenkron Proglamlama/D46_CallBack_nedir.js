// callback nedir daha iyi yöntemler var 
//callback okunması ve yazması zor iç içe  fonksiyonlar oluşur 
//callback cehennemi problemidir bu 


function getName() {
    console.log("can")

}

function getSurName() {
    console.log("oz")



}

getName();
getSurName();
// şuan senkron çalışyor 



console.log("\n\n");


// ASENKRON ÇALIŞAN KODLAR 

function getNameAS() {
    setTimeout(() => {
        console.log("AS can")

    }, 1000)
}

function getSurNameAS() {
    setTimeout(() => {
        console.log("AS oz")

    }, 500)
}


getNameAS();
getSurNameAS(); // çıktı eş zamanlı olarak çalışmaya başlayacak 500 ms de oz yazacak 500 ms sonra da can yazacak 


// calback kısaca öncelikle çalışmasını istediğimiz  kodu öne alır çalıştıktan sonra dieğer kodu çağırır
// asenkrondan  senkrona çevirmede süre kaybı yaşarız 




//!!!    NASIL YAPAR 
//? FİR KONKSİYONU asenkron yapıya paramtre geçirerek senkrona çevirir.


function getNameCL(callback) { // bir parametre veriyoruz çalıştırılacak fonksiyon 
    setTimeout(() => {
        let name="hakan" // apiden gelmiş gibi 
        console.log("\n\n");

        console.log("CL can")

        callback(name); // verilen parametreyi çalıştırdık (parametreli hali ) 

    }, 1000)
}




function getSurNameCL(name) {
    setTimeout(() => {
        let surname= "yasar"; // apiden gelmiş gibi 
        console.log("CL oz")
        console.log(name,surname)

    }, 500)
}


getNameCL(getSurNameCL); //2. çalışacak fonksiyonu parametre olarak verdik 



getNameCL((name)=>{     //direkt 

  getSurNameCL(name)



})