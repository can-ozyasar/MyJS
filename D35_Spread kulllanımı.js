// spread kullanımı
// spread operatörü üç nokta (...) ile gösterilir ve dilimlemek anlamına gelir.
// es6 ile beraber gelen bir özelliklerdendir.

function add(a, b, c, d) {
    console.log(a + b + c + d) // dört parametreli bir fonksiyon
}

add(1, 2, 3, 4); // normalde dört parametreli bir fonksiyon çağırıyoruz

// eğer elimizde bir dizi varsa ve bu diziyi fonksiyona parametre olarak göndermek istiyorsak
let numbers = [1, 2, 3, 4]; // bir dizi
add(...numbers); // spread operatörü ile diziyi parametre olarak gönderiyoruz7
// ...numbers şu mantıkla çalışır add(numbers[0], numbers[1], numbers[2], numbers[3]); // dizinin elemanlarını tek tek parametre olarak gönderir


const diller1 = ["JavaScript", "Python",]; // bir dizi tanımlıyoruz
const diller2 = ["Java", "C++"]; // başka bir dizi tanımlıyoruz

//? şu mantıkla çalışır diller1["javascript",python,diller2[0],diller2[1]];  // iki diziyi birleştiririz


const tumDiller = [...diller1, ...diller2]; // spread operatörü ile iki diziyi birleştiriyoruz
console.log(tumDiller); // konsola yazdırıyoruz



// bir öncekş derste destructing kullanarak diziden elemanları almıştık
// şimdi spread operatörü ile diziden elemanları alalım



const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // bir dizi tanımlıyoruz
let [a, b, ...kalanSayilar] = numbers2; // destructing kullanarak diziden elemanları alıyoruz ilk iki elemanı ve kalan sayıları da kalanSayilar dizisine atıyoruz

//  a=1 , b=2 , kalansayilar = 3 4 5 6 7 8 9  olur
console.log(a, b, kalanSayilar); // konsola yazdırıyoruz



//

const array1=["enes", "can", "ahmet", "mehmet"]; // bir dizi tanımlıyoruz

//arayy2 ye aray 1 in elemanları atamak istiyoruz for ile tek tek atamak yerine ;
const array2 = [...array1]; // spread operatörü ile array1 dizisini array2 dizisine atıyoruz
// array2 = ["enes", "can", "ahmet", "mehmet"]; olur