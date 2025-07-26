// arama motorlarındaki sonuç getirme mantığıyla benzer olarak kullanıcının arattığı kelimeyi elimizdki diziyi kontrol edip ekrana yazdıracağız


let urun1={
isim:"lenovo",
kategori:"teknoloji",
fiyat:5000

}

let urun2={

    isim:"asus nitro",
    kategori:"teknoloji",
    fiyat:6000
}

let urun3={
    isim:"asus swift 2027",
    kategori:"teknoloji",
    fiyat:7000
}
let urun4={
    isim:"samsung yogabook",
    kategori:"teknoloji",
    fiyat:8000
}
let urun5={
    isim:"samsung ultrabook 2025",
    kategori:"teknoloji",
    fiyat:9000


}
let urun6={
    isim:"asus ultrabook",
    kategori:"teknoloji",
    fiyat:10000
}

let urunlerData=[urun1,urun2,urun3,urun4,urun5,urun6];
let arananKelime=prompt("Aramak istediğiniz kelimeyi giriniz");


// fonksiyonları çağırma
let filtreliArama=getFiltersProducs(urunlerData);
getFiltersProducs(urunlerData);
filtreliUrunlerYazdir(filtreliArama);







function getFiltersProducs(urunlerData){
let filtreliArama=[];
    urunlerData.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(arananKelime.toUpperCase(),0)){
            //console.log("Aradığınız ürün bulundu:"+urun.isim+" "+urun.fiyat+" "+urun.kategori);
            filtreliArama.push(urun);
        }
        else{
           // console.log("Aradığınız ürün bulunamadı");
        }
    });
    return filtreliArama; 
}



function filtreliUrunlerYazdir(urunler){

   urunler.forEach(function(urun){
console.log("------------------------");
    console.log(" | "+urun.isim+" | "+urun.fiyat+" | "+urun.kategori);
    console.log("------------------------");
   
});
}


