/*

1-JavaScript senkron çalışan bir  proglamlama dilidir( vir iş biterdiğeri başlar  sıralı )


! asenkron çalıştığı yerler 
?
? 1-Timing
? 2-Event(olay)
? 3-Http isteklerinde 

todo --- web api tarafından yönetilen tüm olaylar asenkron çalışır 
CALLBACK PROMİSE ASYNC AWAİT YAPILARI İLE ASENKRONU  SENKRONA ÇEVİREBİLİYORUZ




*/

console.log("1")
console.log("2")
console.log("3")

 // ekrana üstten başlayarak çalıştırır  aşşağı doğru ve  sırayla  1 2 3 yazar 


 console.log("sena1")

 setTimeout(()=>{ //? 1 sn bekletme komutu 
      console.log("sena2 1sn")

 },1000)
setTimeout(() => {
    console.log("sena3 500ms")
}, 500);
setTimeout(() => {
    console.log("sena5 750ms")
}, 750);
console.log("sena4")



//çıktı olması beklenen senkron da  ---->>>>>>   sena1 sena2 sena3 sena4
// oluşan gerçek çıktı              ------>>>>>> sena1 sena4 sena3 sena2


//? kod çalışmaya başlar sena1 yazar sena 2 yazma işlemi (1 saniye gecikmeli işlem) ve sena3 (500ms) işlemleri asenkron olarak diğer dallarda başlar 
//? bu sırada kodlar ayrı dallarda devam eder ve il biten sena1 sena4 dalı sonra sena3 dalı en son da sena2 dalı tamamlar ve yazar
//? özetce : yapılacak işlem dallara bölünür ve ilk işlemini bitiren yazar 



//! ASENKRON PROBLEMLERİNDEN EN ÖNEMLİSİ YÖNETİMİ ZORDUR .SIRALAAMYI YÖNETMEK GEREKİR 