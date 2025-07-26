// var let ve const kullanımı ve örnekleri
var a=5
let b=2 
const c=3   

// var ile tanımlanan değişken fonksiyon değişkeni olarak oluşur .
// örnek aşşağıda if içinde tanımlanan değişken normalde parantezler dışında kullnılamaması gerekir 
// ama burada fonksiyon içinde ulaşabiliyoruz o var ile tanımlanan değişkene 


function selamver(){
    var selam="fonksiyon içinde var ile tanımlanmış selam  "
    console.log(selam)
    if(true){
        var selam="if bloğu içinde var ile tanımlanmış selam  "
        console.log(selam)
    }
    console.log(selam)

}          
selamver() 

 //! var çok fazla yer kaplar ve global değişken gibi davranır o fonksiyon içinde 
 //main de bir fonksiyon

 //! const ve let arası fark const un değiştirilemez olmasıdır  ilk atanan değer değiştirilemez
    //! let ise değiştirilebilir
    const pi=3.14
    //pi=3.15 //hata verir
    console.log(pi)
    let d=5
    d=6
    console.log(d)


    const kisi={
        ad:"Ahmet",
        yas:25

    }
    //değiştirmeye çalışıyoruz const u 
    kisi={
        ad:"Mehmet",
        yas:30}
    // hata verir çünkü const ile tanımlanan değişkenin referansı değiştirilemez
    console.log(kisi.ad)




    let kisi2={
        ad:"Ahmet",
        yas:25

    }

    kisi2.ad="Mehmet"   
    // hata vermez çünkü let ile tanımlanan değişkenin referansı değiştirilebilir
    console.log(kisi2.ad)