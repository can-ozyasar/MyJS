// klasik yöntemde fonksiyon tanımlama ES6 DAN ÖNCE KULLANILAN YÖNTEM
function yazdir() {
    console.log("merhaba klasik fonksiyon");
}
yazdir();

//ARROW FUNCTION YÖNTEMİ ES6 İLE GELEN YENİLİK OK (GÖSTERİCİ )FONKSİYONU DEMEK KISACA  

const yazdirArrow = () => { //? fonksiyon tanımlayıp yazdır değişkenine atıyoruz
    console.log("merhaba arrow function");
}
yazdirArrow();


// parametreli arrow function
const paramertreliYazdirArrow = (mesaj) => {
    console.log(mesaj);
}

paramertreliYazdirArrow("merhaba arrow function parametreli");


// todo eğer arrow funcion tek satırda ise süslü parantez kullanmadan da yazılabilir
const tekSatirliYazdirArrow = (mesaj) => console.log(mesaj); //? tek satırda yazdırma işlemi
tekSatirliYazdirArrow("merhaba tek satırlı arrow function");





//! parantez kullanmadan tek parametreli arrow function yazmarsak burda 
//! hatalı çıktı alırız bu durumlarda tek satırlı da olsa parantez kullanmalıyız altında işlemler oluğu için
// parantez kullanmak garantili bir durumdur kullanmakta fayda var
const yanlisYazdirArrow = mesaj => 
console.log(mesaj); 
let a=5;
console.log(a);
console.log("merhaba")

yanlisYazdirArrow("merhaba yanlış yazdırma arrow function");




//? tek parametreli arrow functionlarda parantez kullanmak zorunda değiliz
const tekParametreliYazdirArrow = mesaj => console.log(mesaj); 
tekParametreliYazdirArrow("merhaba tek parametreli arrow function");


// örnek küp alma fonku ayzalım 
const kupAl= (sayi)=> {return sayi*sayi*sayi} //? return ifadesi tek satırda kullanılamaz parantez kullanmak zorundayız
console.log("Küp alma sonucu:",kupAl(3)); // 27



// tek satırda retun yapılıyorsa  return yazmak zorunda değiliz
const tekSatirliKupAl = sayi => sayi * sayi * sayi; //? tek satırda return ifadesi kullanabiliriz
console.log("Tek satırlı küp alma sonucu:", tekSatirliKupAl(4)); // 64


// atama yapmadan arrow function yazmak hatalı olur değişkene atama yapmalıyız
()=>{
    console.log("Bu hatalı bir arrow function tanımıdır, bir değere atama yapılmalıdır.");
}