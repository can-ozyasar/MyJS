/*

ATM uygulaması yapacağız swich case ler ile 
- bakiye  BAŞLANGIÇTA 200 TL olacak
- işlemler
1. işlem : Bakiye öğrenme
2. işlem : Para çekme
3. işlem : Para yatırma
4. işlem : Çıkı

*/

let bakiye=200;
let yeterli=false;
let secim=0;

//? WHİLE İLE YAPILMIŞ HALİ

 // 4. işlem seçilene kadar döngü devam eder

while(secim!=4){
    secim=Number(prompt("1. işlem : Bakiye öğrenme"+ "\n" + "2. işlem : Para çekme" + "\n" + "3. işlem : Para yatırma" + "\n" + "4. işlem : Çıkış" + "\n" + "İşlem seçiniz"))

switch(secim){
    case 1:
        alert("Bakiyeniz : " + bakiye + " TL")
        break;
    case 2:
        let cekilenTutar=Number(prompt("Çekmek istediğiniz tutarı giriniz"))
        if(cekilenTutar>bakiye){
            alert("Yetersiz bakiye")
        }
        else{
            yeterli=true
            bakiye=bakiye-cekilenTutar
            alert("Yeni bakiyeniz : " + bakiye + " TL")
        }
        break;
    case 3:
        let yatirilanTutar=Number(prompt("Yatırmak istediğiniz tutarı giriniz"))
        bakiye=bakiye+yatirilanTutar
        alert("Yeni bakiyeniz : " + bakiye + " TL")
        break;
    case 4:
        alert("Çıkış yapılıyor")
        break;
    default:
        alert("Geçersiz işlem")
        break;
}
}