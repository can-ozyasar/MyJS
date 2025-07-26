//  bu bölümde  diyalog kutularını göreceğiz 

// alaert
//prompt
//confirm


//! kullanıcıya uyarı vermek için kullnılır 
alert("Merhaba")



//! dışardan veri almak için 
let isim=prompt("Adınızı giriniz")
console.log(isim)


// stringden nunmber tipinde veri almak için
//Number() fonksiyonu kullanılır
let yas=Number(prompt("yasınızı giriniz"))
console.log(yas)


//! confirm kullanıcıya onaylatma işlemi yapar 
// dönen değer true yada false olarak alınabilir, değişkene atanabilir
let silinsinMi=confirm("Emin misiniz")
console.log(silinsinMi)



//todo 
//? kullanıcıdan alınan değerler hep strin olarak alınır .
//? isteğe göre dönüştürme yapılabilir
//? örnek parseInt() fonksiyonu ile sayıya dönüştürme yapılabilir



//basit ortalama hesaplayan fonksiyon yapımı 
let sayi1=Number(prompt("1. sayıyı giriniz"))
let sayi2=Number(prompt("2. sayıyı giriniz"))


function ortlamaBul(sayi1,sayi2){
 let ortalama=( (sayi1+sayi2)/2)
 if(ortalama<50){
     alert("Ortalama 50 den küçük : "+ortalama)
     console.log("+  ortalama : "+ortalama)
 }
    else{
        alert("Ortalama 50 den büyük "+ortalama)
        console.log("+  ortalama : "+ortalama)
    }
 
}
ortlamaBul(sayi1,sayi2)


