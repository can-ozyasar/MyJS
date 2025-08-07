//Map ------->   key(anahtar) , value(değer) çiftlerinden oluşan bir veri yapısıdır.

//TODO map 'oluşturmak' için "new Map()" kullanılır


const map1=new Map(); // yeni bir map oluşturuyoruz
console.log(map1); // boş bir map konsola yazdırıyoruz



console.log("\n\nmap yazdırma:\n"); 

//TODO map e eleman 'eklemek' için "set" metodunu kullanıyoruz

// ? mapin key ve value değerleri herhangi bir veri tipi olabilir
// ? key ve value değerleri string, number, boolean, object, array gibi veri tiplerini alabilir


map1.set("name", "Enes"); // key: name, value: Enes olan bir eleman ekliyoruz
map1.set("age", 25); // key: age, value: 25 olan bir eleman ekliyoruz
map1.set([1,2,3], {firstname:"enes",lastname:"enes"}); // key: dizi, value: obje olan bir eleman ekliyoruz
map1.set("isStudent", false); // key: isStudent, value: false olan bir eleman ekliyoruz
console.log(map1); // map i konsola yazdırıyoruz



console.log("\n\map yazdırma:\n"); 

let map2 = new Map() 
map2.set(34,"Istanbul") // key: 34, value: istanbul olan bir eleman ekliyoruz
map2.set(6,"Ankara") // key: 6, value: ankara      
map2.set(35,"Izmir") // key: 35, value: izmir 
map2.set(16,"Bursa") // key: 16, value: bursa 
console.log(map2); // map i konsola yazdırıyoruz

console.log("\n\neleman getirme:\n"); 

//TODO "GET" metodu ile map ten eleman 'alabiliriz'
console.log(map2.get(6)); // key: 6 olan elemanın value değerini alıyoruz ve konsola yazdırıyoruz Ankara


console.log("\n\neleman getirme:\n"); 
//TODO "GET" METODU BİR DEĞER DÖNER YANİ BU DEĞERİ YAKALABİLİRİZ
let sehir = map2.get(35); // key: 6 olan elemanın value değerini alıyoruz ve sehir değişkenine atıyoruz
console.log(sehir); // konsola yazdırıyoruz Ankara


console.log("\n\nmap kaç elemanlı:\n"); 
// TODO "SİZE" map in 'kaç' elemanlı olduğunu gösterir
console.log(map2.size); // map in eleman sayısını konsola yazdırıyoruz


console.log("\n\nEleman silmek:\n"); 
//TODO map in elemanlarını 'silmek' için "delete" metodunu kullanıyoruz
map2.delete(6); // key: 6 olan elemanı siliyoruz



console.log("\n\n o eleman varmı:\n"); 
//TODO map içinde elean olup olmadığını kontrol etmek için "HAS" metodunu kullanıyoruz
console.log(map2.has(34)); // key: 34 olan eleman var mı kontrol



console.log("\n\nmapde gezinmek\n"); 
//TODO map üzerinde 'gezinmek' için "FOR of" metodunu kullanıyoruz
for (let [key, value] of map2) { // map2 üzerinde geziniyoruz destructing kullanarak key ve value değerlerini alıyoruz
    console.log(key, value); // key ve value değerlerini konsola yazdır
}


console.log("\n\nSADECE KEYLER:\n"); 

//TODO map üzerinde 'gezinmek' için "keys" metodunu kullanıyoruz
const keys=map2.keys(); // map2 nin key değerlerini alıyoruz
console.log(keys); // key değerlerini konsola yazdırıyoruz



console.log("\n\nSADECE KEY LER:\n"); 

//! bu şekilde oluşan keys bir dizi belirtmez foreach ile üzerinde gezinemeyiz
//!diziye çevirelim 
const keysArray = Array.from(keys); // keys i bir diziye çeviriyoruz
console.log(keysArray); // keysArray i konsola yazdırıyoruz

keysArray.forEach(key => {
    console.log(key); // key değerlerini konsola yazdırıyoruz
}); // forEach ile keysArray üzerinde geziniyoruz


console.log("\n\nSADECE value ler:\n"); 

//TODO  keylerden value değerlerini "almak" için "map2.get(key)" kullanabiliriz
keysArray.forEach(key => {
    console.log(map2.get(key)); // key değerlerini kullanarak value değerlerini konsola yazdırıyoruz
}); 

console.log("\n\nSADECE KEY LER:\n"); 
//TODO Map içinden sadece key değerlerini almak için 
for (let key of map2.keys()) { 
    console.log(key);    
} 

//TODO Map içinden sadece value değerlerini almak için
console.log("\n\nSADECE VALUELER:\n");
for (let value of map2.values()) { // map2 nin value değerlerini alıyoruz
    console.log(value); // value değerlerini konsola yazdırıyoruz
}







//? MAP DEN ARRAYA ÇEVİRME İŞLEMİ 


// dizi elemaları da dizi olan- key ve value değerlerini içeren bir dizi oluşturur çevirme işlemi 
/*şu şekil
const array2=[[34,"istanbul"]
 [6,"Ankara"],
 [35,"Izmir"],
 [16,"Bursa"]; 

*/console.log("\n\nmap diziye çevirme:\n");


const mapToArray = Array.from(map2); // map2 yi bir diziye çeviriyoruz


mapToArray.forEach((item) => {
    console.log(item[0],item[1]); //  key value değerlerini  diziden yazdırıyoruz her elemanın 0 ve 1. indexleri konsola yazdırıyoruz
})


//TODO ARRAYI MAP E ÇEVİRME İŞLEMİ
console.log("\n\narray map e çevirme:\n");
const myMap=new Map(mapToArray); // mapToArray dizisini bir map e çeviriyoruz
console.log(myMap); // map i konsola yazdırıyoruz


const map3 = new Map()
map3.set(34,"Istanbul") 
map3.set([1,2,3],"Bursa")


//!  ÖNEMLİ

console.log(map3.get([1,2,3])); // key: [1,2,3] olan elemanın value değerini almaya çalışırsak hatalı olur 
//çünkü  fonksiyona verdiğimiz dizi referansı ile mapteki dizi referansı farklıdır yani bellekte farklı yerler kullanırlar 
//ama örnek 34 falan yazınca bunlar string olduğu için mapteki referans ile fonksiyona verdiğimiz referans aynı olur ve değerini alabiliriz

// map referansa bakar aynı yedeyse aynı yer der değerlerin aynı olması hatalı olur 
//aynı referans ver ki bulunuyor desin 


let arr = [1, 2, 3]; // bir dizi tanımlıyoruz
map3.set(arr, "Bursa"); // key: arr, value: Bursa olan bir eleman ekliyoruz
console.log(map3.get(arr)); // key: arr olan elemanın value değerini alıyoruz

// burada arr dizisini map e eklerken referansını kullanıyoruz
// yani arr dizisi ile map e eklediğimiz dizi aynı referansa sahip olduğu için  hata almaz