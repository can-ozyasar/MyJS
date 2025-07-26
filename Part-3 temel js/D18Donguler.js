// döngüler 1 for döngüsü kullanımı 

//! 1 den 10 a kadar olan sayıları yazdırma
for(let i=1;i<=10;i++){
    console.log(i);
}



//! while döngüsü kullanımı

let i=1;
while(i<=10){
    console.log(i);
    i++;
}

//! do while döngüsü kullanımı
// bir kez girer sonra koşula bakar
do{
    console.log(i);
    i++;
}while(i<=10);



//! break kullanımı 
//döngüden çıkmak için kullanılr


while(i<10){
    if(i==8){
        break;
    }
    console.log(i);
    i++;
}


//! continue kullanımı
//amacı döngüsü o değer için kırar ve devam eder
// 3 ün katları hariç diğer sayıları yazdırma
for(let i=1;i<=10;i++){
    if(i%3==0){
        continue;
    }
    console.log(i);
}






//! çarpım tablosu yapımı 
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(i + "x" + j + " = " + i*j);
    }
    console.log("*****************");
}


//! asal sayı bulma uygulaması 
let sayi=Number(prompt(" asal kontrolü için sayı giriniz"))
let asal=true;

for(let k=2;k<Number(sayi/2);k++){
    if(sayi<2){

        asal=false;
        break;
    }
    if(sayi%k==0){
        asal=false;
        break;
    }
}

alert(asal ? " sayı asaldır" : " sayı asal değildir");




// faktoriel hesaplama uygulaması 


let sayim=Number(prompt("faktoriel  hesaplaması için sayı giriniz"))
let faktoriel=1;
// while(sayim>1){
//     faktoriel*=sayim;
//     sayim--;
// }
// alert(""+sayim + " sayısının faktorieli while ile  : " + faktoriel);

//for ile yapımı 
for(let l =1;l<=sayim;l++){
    faktoriel*=l;
}
alert(""+sayim + " sayısının faktorieli for ile  : " + faktoriel);














// armstrong sayı bulma uygulaması
//armstrong sayısı rakamları kübü toplamı kendisine eşit olan sayılardır

// önce rakamları ayırmak gereki


let sayiArm=Number(prompt("armstrong sayı kontrolü için sayı giriniz"))
let toplam=0;
let rakam=0;
let temp=sayiArm;
while (sayiArm>0){
rakam=sayiArm%10;
sayiArm=Math.floor(sayiArm/10);
toplam+=rakam*rakam*rakam;
}

if(toplam==temp){
    alert("sayı armstrong sayısıdır")
}
else
alert("sayı armstrong sayısı değildir");

//rakamları nasıl ayırabiliriz onu düşünelim biraz
// 153 sayısını alalım
// 153%10=3



let arm=prompt("armstrong sayı kontrolü için sayı giriniz kısa yöntem")
let toplamArm=0;
for(let i=0;i<arm.length;i++){
    let rakam=sayiArm.charAt(i);
    toplamArm+=rakam**3;
}

if(toplamArm==arm){
    alert("sayı armstrong sayısıdır kısa yöntem")
}
else
alert("sayı armstrong sayısı değildir ısa yöntem");
