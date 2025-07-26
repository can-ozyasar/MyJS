// String (Metin) değişkeni
let isim = "Ahmet";
const soyisim = 'Yılmaz';

// Number (Sayısal) değişkenler
let yas = 25;
const pi = 3.14;

// Boolean (Mantıksal) değişken
let evliMi = true;
let ogrenciMi = false;

// Array (Dizi) değişkeni
let renkler = ['kırmızı', 'mavi', 'yeşil'];
const sayilar = [1, 2, 3, 4, 5];

// Object (Nesne) değişkeni
let kisi = {
    ad: "Ali",
    yas: 30,
    meslek: "Mühendis"
};

// Undefined değişken
let tanimsiz;

// Null değişken
let bos = null;

// Function örneği - Normal fonksiyon
function selamVer(isim) {
    return "Merhaba " + isim;
}

// Arrow function örneği
const kareyiHesapla = (sayi) => sayi * sayi;







// Destructuring örneği
let [ilk, ikinci] = renkler;
let {ad: kullaniciAd, meslek} = kisi;

// Spread operator örneği
let yeniDizi = [...renkler, 'sarı', 'mor'];
let yeniNesne = {...kisi, yas: 31};

// Map ve Set örnekleri
let myMap = new Map();
myMap.set('anahtar', 'değer');

let mySet = new Set([1, 2, 2, 3, 3]); // Tekrarlayan değerleri almaz// 1. String - Metin verilerini saklar
let text = "Hello"; // Çift tırnak
let text2 = 'World'; // Tek tırnak
let template = `Template ${text}`; // Template literal

// 2. Number - Hem tam sayıları hem ondalık sayıları saklar
let integer = 42;
let decimal = 3.14;

// 3. Boolean - Sadece true veya false değerlerini alır
let isActive = true;
let isLoggedIn = false;

// 4. Array - Birden fazla değeri sıralı şekilde saklar
let fruits = ['apple', 'banana', 'orange'];
let mixed = [1, 'hello', true, null]; // Farklı türleri saklayabilir

// 5. Object - Key-value pairs şeklinde veri saklar
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

// 6. Undefined - Tanımlanmamış değişkenlerin varsayılan değeri
let undefinedVar;

// 7. Null - Bilinçli olarak "boş" değer atanmış değişken
let nullVar = null;

// 8. Function - Yeniden kullanılabilir kod blokları
function add(a, b) {
    return a + b;
}

