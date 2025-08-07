// For In For Of döngüleri

let names = ["Enes", "Can", "Ahmet", "Mehmet"]; // bir dizi tanımlıyoruz


names.forEach(function (name) { // forEach ile dizinin elemanlarını tek tek alıyoruz
    console.log(name); // konsola yazdırıyoruz
})


console.log("\n\n"); 



//arrow function ile dizinin elemanlarını tek tek alalım
names.forEach((name) => {
    console.log(name); // konsola yazdırıyoruz  
})
console.log("\n\n"); 

// öğrendiğmizi uygulayalım
// tek prametre ve tek satırma işlemi varsa süslü ve normal  parantez kullanmadan da yazabiliriz

names.forEach(name => console.log(name))
console.log("\n\n"); 

//TÜM BUNLAR KLASİK YÖNTEMLERDİ

//ŞİMDİ FOR IN DÖNGÜSÜNÜ KULLANALIM




//todo // bu yöntem dönülecek elemanların index numaralarını verir 
//todo  forin index i çağrıştırabilir

for(let name in names){
    console.log(name); // konsola yazdırıyoruz  indexleri yazar
}
console.log("\n\n"); 

//indexten değere indexi kullanarak erişebiliriz
for(let name in names){
    console.log(names[name]); // konsola yazdırıyoruz  indexleri yazar
}

console.log("\n\n"); 

//ŞİMDİ FOR OF DÖNGÜSÜNÜ KULLANALIM
//todo // bu yöntem dönülecek elemanların kendilerini verir
//todo  forof değeri çağrıştırabilir

for(let name of names){
    console.log(name); // konsola yazdırıyoruz  elemanları yazar
}
console.log("\n\n"); 


//forofda indexe erişmek için indexof metodu kullanabilirz
for(let name of names){
    console.log(names.indexOf(name)); // konsola yazdırıyoruz  indexleri yazar
}
console.log("\n\n"); 

