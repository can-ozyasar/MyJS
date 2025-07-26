// DESRUCTİNG KULLANIMI

let languages = ["JavaScript", "Python", "Java", "C++"]; // proglamlama dilleri dizisi tanımlayalım 


//klasik yöntemle diziden elemanları almak

let lang1, lang2, lang3, lang4 // değişkenlerimizi tanımlayalım
lang1 = languages[0]; // dizinin ilk elemanını lang1 değişkenine atadık
lang2 = languages[1]; // dizinin ikinci elemanını lang2 değişkenine atadık
lang3 = languages[2]; // dizinin üçüncü elemanını lang3 değişkenine atadık
lang4 = languages[3]; // dizinin dördüncü elemanını lang4 değişkenine atadık

console.log(lang1, lang2, lang3, lang4); // konsola yazdırıyoruz



// Destructing kullanarak diziden elemanları almak
let [dil1, dil2, dil3, dil4] = languages; //
//? üstte tanımlanmış lang lara atama da yapabiliriz o zaman tekrar let yazmadan yaparız 
[lang1, lang2, lang3, lang4] = languages; // destructing kullanarak diziden elemanları alıyoruz





const hesapla = (a, b) => {
    
        const toplam= a + b
        const fark= a - b
        const carpim= a * b
        const bolum= a / b

        const dizi=[toplam, fark, carpim, bolum]; // işlemleri bir diziye atıyoruz
        return dizi; // diziyi return ediyoruz
    
}


// dönen diziyi destructing kullanarak alalım
let [toplamSonuc, farkSonuc, carpimSonuc, bolumSonuc] = hesapla(10, 5); // hesapla fonksiyonunu çağırıyoruz ve destructing kullanarak diziden elemanları alıyoruz

//? hesapla(10,5) bir dizi döndürüyor ve biz destructing kullanarak bu diziden elemanları alıyoruz





// objeler için destructing kullanımı
let kisi = {
    ad: "Ahmet",
    soyad: "Yılmaz",
    yas: 30,
    meslek: "Mühendis"
};
let{adi, soyadi, yasi, mesleki} = [kisi.ad, kisi.soyad, kisi.yas, kisi.meslek]; // destructing kullanarak objeden elemanları alıyoruz
//yada
let{ad, soyad, yas, meslek} = kisi; //objedeki key isimlerinin aynısını verrerek kullanbiliriz
//yada
let{ad: kisiAd, soyad: kisiSoyad, yas: kisiYas, meslek: kisiMeslek} = kisi; // destructing kullanarak objeden elemanları alıyoruz ve key isimlerini değiştiriyoruz bu yöntem de geçerli


console.log(kisiAd, kisiSoyad, kisiYas, kisiMeslek); // konsola yazdırıyoruz
consoşele.log(ad, soyad, yas, meslek); // konsola yazdırıyoruz