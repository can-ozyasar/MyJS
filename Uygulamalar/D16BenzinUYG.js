 // benzin istasyonu uygulaması 

 /*
 
 
 - benzin istasyonunda 3 çeşit yakıt bulunmaktadır
    - kullanıcıdan alınan litre miktarına göre ödenecek tutarı hesaplayan programı yazınız
    - benzin fiyatları şu şekildedir
 
 
 1- benzin : 49 TL
 2-DİZEL : 47 TL
 3-LPG :25 TL
 
 ALINACAK BİLGİLER
 1 YAKIT TİPİ (1,2,3)
 2 ALINACAK LİTRE MİKTARI
 
 */


 let bakiye=300;
 var yeterli=true


 function benzinIstasyonu(toplamTutar){
    if(toplamTutar>bakiye){
        alert("Yetersiz bakiye")
        yeterli=false

    }
    else{
        bakiye=bakiye-toplamTutar
    }
}
 


 let dizel=47,lpg=25,benzin=49,toplamTutar=0,litre=0
 
 const yeniSatır="\r\n"
 let secilenYakit=""

 while(yeterli){

 let yakitTipi=Number(prompt("Yakıt tipini seçiniz "+yeniSatır+"1-BENZİN"+yeniSatır+"2-DİZEL"+yeniSatır+"3-LPG"+yeniSatır+"4 çıkış"))
    
 if(yakitTipi==4){
    alert("Çıkış yapılıyor")
    
}
 

else{


if(yakitTipi==1 || yakitTipi==2 ||  yakitTipi==3)
    litre=Number(prompt("Kaç litre alacaksınız"))
   
    

    if(yakitTipi==1){
        secilenYakit="BENZİN"
        toplamTutar=benzin*litre 
    
        benzinIstasyonu(toplamTutar)
    
    }
       
    else if(yakitTipi==2){
        secilenYakit="DİZEL"
        toplamTutar=dizel*litre
        benzinIstasyonu(toplamTutar)

    }
    else if(yakitTipi==3){
        secilenYakit="LPG"
        toplamTutar=lpg*litre
        benzinIstasyonu(toplamTutar)

    }
    else{
        alert("Geçersiz yakıt tipi")
    }
    
}
alert("Seçilen yakıt tipi : "+secilenYakit+yeniSatır+
    "Alınan litre miktarı : "+litre+yeniSatır+
"Ödenecek tutar : "+toplamTutar+yeniSatır+
"kalan bakiye : "+bakiye+yeniSatır)


 }
   