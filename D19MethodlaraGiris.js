

//? GERİYE DEĞER DÖNDÜREN FONKSİYONLAR
function yazdir(){
    console.log("consola yazdırma işlemi function ile yapıldı")

}

yazdir();

//? PARAMERELİ FONKSİYOONLAR

function yazdirParametreli(a,b){
    console.log(a + " " + b)
}
yazdirParametreli("merhaba","nasılsınız parametreli fonk. ile yazdırıldı ");

//? GERİYE DEĞER DÖNDÜREN FONKSİYOONLAR

function toplama(a,b){
    return a+b;
}

let toplam=toplama(5,10);
console.log("toplam değer döndüren fonksiyon ile  : " + toplam);

//! return dan sonra kod yazılmaz yazılsa da çalışmaz zaten erişemez derleyici                            












// todo kelime sayısı bulma uygulaması



let metin ="şuanda izmirde js eğitimi çekmekteyim deneme yazısıdır";
let harf=prompt("Sayısını bulmak istediğiniz harfi giriniz")

function bul(kelime){
    let sayac=0;
    for(let i=0;i<metin.length;i++){
        if(metin[i]==kelime){
            sayac++;
        }
    }
    return sayac;
}

alert("metinde " + harf + " harfi " + bul(harf) + " tane bulunmaktadır");






//todo  mükemmel sayı bulma uygulaması 
/// mükemmel sayı kendisi hariç bölenlerinin toplamı kendisine eşit olan sayılardır
let mukemmel=0;

function findferfectNumber(muk){

    for(let h=2;h<=(muk/2);h++){
        if(muk%h==0){
            mukemmel+=h;
        }
    }
    mukemmel+=1;
}
let muk=Number(prompt("mükemmel sayı kontrolü için sayı giriniz"))


findferfectNumber(muk);
alert(mukemmel==muk ? "sayı mükemmel sayıdır" : "sayı mükemmel sayı değildir");




//todo  10 luk tabanı 2 lik tabana çevirme hesaplama uygulaması

// let sayi=Number(prompt("10 luk tabanı 2 lik tabana çevirmek için sayı giriniz"))
// let binary="";
// let kalan;
// for(let n=0;n<=sayi;n++){
//     kalan=sayi%2;
//     binary+=kalan;
//     sayi=parseInt(sayi/2);
// }
  
// alert("2 lik tabanı : " + binary);


convertDecimalToBinary(10);

function convertDecimalToBinary(number){


    let binary="";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            binary+=1;
            break;
        }
    }
    let result=reverse(binary);
console.log("sonuç "+result);
}


function reverse(binary){
let reverseBinary2="";
for(let i=binary.length-1 ; i>=0 ; i--){
    reverseBinary2+=binary.charAt(i);
}
return reverseBinary2           ;
}

