//? dizilerde foreach döngüsü

let isimler=["ahmet","mehmet","ayşe","fatma"];


isimler.forEach(function(isim){
    console.log(isim);
});


let arabalar=["bmw","toyota","seat","renault","mercedes","porsche","audi"];

//? dizilere sona eleman ekleme 
arabalar.push("fiat"); //! geriye  dizinin kaç elemanlı olduğunu döndürür
let uzunluk=arabalar.push("fiat"); 
console.log( "dizi uzunluğunu döndürür ekleme ve silme methotları : "+uzunluk);

//? dizilere başa eleman ekleme
arabalar.unshift("nissan"); //! geriye  dizinin kaç elemanlı olduğunu döndürür




//? dizilere sondan eleman silme
arabalar.pop();

//? dizilere baştan eleman silme
arabalar.shift();
console.log("------------splice metodu -----------------------"+arabalar);

//? splice metodu
arabalar.splice(2,0,"volvo"); //! 2. indexten itibaren 0 eleman sil ve yerine volvo ekle
console.log(arabalar);


arabalar.splice(2,1,"togg"); //! 2. indexten itibaren 1 eleman sil ve yerine togg ekle
console.log(arabalar);


arabalar.splice(2,1); //! 2. indexten itibaren 1 eleman sil
console.log(arabalar);



console.log("-----------------------------------");



//? tostring metodu
console.log("-----------string'e çevirme--------------");
let arabalarString=arabalar.toString();
console.log(arabalarString);


////? join metodu aralara istediğimiz karakteri koyarak birleştirme yapar stringe çevirirken
console.log("-----------join metodu--------------");
let arabalarJoin=arabalar.join("----");
console.log(arabalarJoin);




//?concat metodu dizileri birleştirme için kullanılır
console.log("-----------concat metodu--------------");
let yeniArabalar=["honda","mazda","opel"];
let yeniListe=arabalar.concat(yeniArabalar);
console.log(yeniListe);


//?slice metodu diziyi dilimlemek için kullanılır
console.log("-----------slice metodu--------------");
let arabalar2=arabalar.slice(2); //2. indexten itibaren sona kadar al demek 

console.log(arabalar2)+"\n\r";


arabalar3=arabalar.slice(2,3); //2. indexten itibaren sona kadar al demek 
console.log(arabalar3);

//? length dizinin eleman sayısını döndürür
console.log("-----------length metodu--------------");
console.log(arabalar.length);

//? reverse metodu diziyi ters çevirir
console.log("-----------reverse metodu--------------");
let tersArabalar=arabalar.reverse();
console.log(tersArabalar);
//! arabalar.reverse()  //*** */ orjinal diziye işlem yapar onu ters çeirili hale getirirr bunu istemeyebiliriz
// başka kopyalar üzerinde işlme yapmak daha iyi olabilir orjinal dizi değişmesin diye 

//? spit metodu stringi diziye çevirme
console.log("-----------split metodu--------------");
let isimler0="bmw,mercedes,audi,volvo";
let dizi=isimler0.split(",");
console.log(dizi);






//?indexOf metodu elemanın indexini döndürür
console.log("-----------indexOf metodu--------------");
let index=arabalar.indexOf("bmw");
console.log(index);



//? include metodu kullanımı 
console.log("-----------include metodu--------------");
let varMi=arabalar.includes("toyota");
console.log(varMi);
varMi=arabalar.includes("dodge");
console.log(varMi);






// METHODLARI EZBERLEMEYE GEREK YOK ARAŞTIRARAK KODLARI DAHA İYİ ANLAMA YOLUNDA KULLANILABİLİR