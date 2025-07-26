// local storage kulanımı 

// değer ekleme
localStorage.setItem("hareket1","ayak")
localStorage.setItem("hareket2","kablo")
localStorage.setItem("hareket3","makine")
localStorage.setItem("hareket4","kasa")


// değer alma 
let value = localStorage.getItem("hareket1")
console.log(value);

//değer silme
 localStorage.removeItem("hareket2")



 //tümünü temizleme 
 localStorage.clear()

// derse devame tmek için tekrar ekledim çünkü bir üst satırda silmiştik clear ile 
 localStorage.setItem("hareket1","ayak")
localStorage.setItem("hareket2","kablo")
localStorage.setItem("hareket3","makine")
localStorage.setItem("hareket4","kasa")



let hareketler=["ayak","kablo","makine","kasa"];


// local storage a ekliyoruz dizi olarak ekliyoruz
localStorage.setItem("hareketler",JSON.stringify(hareketler)) // stringe çeviriyoruz çünkü local storage sadece string alır;


// burada diziyi objeye çeviriyoruz ve local storage a ekliyoruz
let hareketler2=JSON.parse(localStorage.getItem("hareketler")) // stringden objeye çeviriyoruz
console.log(hareketler2); // diziyi alıyoruz ve ekrana yazdırıyoruz


// foreach ile diziyi döngüye alıyoruz ve her bir elemanı alıyoruz

hareketler2.forEach(function(hareketler){ // diziyi döngüye alıyoruz ve her bir elemanı alıyoruz 
    console.log(hareketler); // dizinin elemanlarını ekrana yazdırıyoruz{
    
});