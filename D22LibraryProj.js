// KİTAPLIKTAN KİTAP SORGULAYARAK KİTAP KONUMU BULMA UYGULAMASI 


let kitap1={
    isim:"savaş ve barış",
    yazar:"tolstoy",
    sayfaSayisi:1000,
    raf:"1.3-RAF"
}
let kitap2={
    isim:"suç ve ceza",
    yazar:"dostoyevski",
    sayfaSayisi:800,
    raf:"4.5-RAF"
}
let kitap3={
    isim:"1984",
    yazar:"george orwell",
    sayfaSayisi:300,
    raf:"2.2-RAF"
}
let kitap4={
    isim:"hayvan çiftliği",
    yazar:"george orwell",
    sayfaSayisi:200,
    raf:"3.4-RAF"
}
let kitap5={
    isim:"karamazov kardeşler",
    yazar:"dostoyevski",
    sayfaSayisi:600,
    raf:"5.1-RAF"
}


let kitaplarData=[kitap1,kitap2,kitap3,kitap4,kitap5];

let raf11={ kod:"1.1-RAF",goster:false};
let raf12={ kod:"1.2-RAF",goster:false};
let raf13={ kod:"1.3-RAF",goster:false};
let raf14={ kod:"1.4-RAF",goster:false};
let raf15={ kod:"1.5-RAF",goster:false};

let raf21={ kod:"2.1-RAF",goster:false};
let raf22={ kod:"2.2-RAF",goster:false};
let raf23={ kod:"2.3-RAF",goster:false};
let raf24={ kod:"2.4-RAF",goster:false};
let raf25={ kod:"2.5-RAF",goster:false};

let raf31={ kod:"3.1-RAF",goster:false};
let raf32={ kod:"3.2-RAF",goster:false};
let raf33={ kod:"3.3-RAF",goster:false};
let raf34={ kod:"3.4-RAF",goster:false};
let raf35={ kod:"3.5-RAF",goster:false};

let raf41={ kod:"4.1-RAF",goster:false};
let raf42={ kod:"4.2-RAF",goster:false};
let raf43={ kod:"4.3-RAF",goster:false};
let raf44={ kod:"4.4-RAF",goster:false};
let raf45={ kod:"4.5-RAF",goster:false};


let raf51={ kod:"5.1-RAF",goster:false};
let raf52={ kod:"5.2-RAF",goster:false};
let raf53={ kod:"5.3-RAF",goster:false};
let raf54={ kod:"5.4-RAF",goster:false};
let raf55={ kod:"5.5-RAF",goster:false};


let raflar=[
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15]
]




function rafOlustur(){

    console.clear();
    let satir="";
    for(let i=0;i<raflar.length;i++){
        for(let j=0;j<5;j++){
        
            satir+="|"+(raflar[i][j].goster ? raflar[i][j].kod :"---")+"";
        }
    console.log(satir);
    console.log("-------------------------------------------------");
    satir="";
    }
       
};

function kodBul(kitapismi){
    let rafkod=null;
    kitaplarData.forEach(function(kitap){

        if(kitap.isim.toUpperCase().includes(kitapismi.toUpperCase(),0)){
       
       rafkod=kitap.raf;
        } 
    });    
    return rafkod  ;
};

function raftaGoster(rafkodu){
    for(let i=0;raflar.length;i++ ){
        for(let j=0;j<5;j++){
            if(raflar[i][j].kod==rafkodu){
                raflar[i][j].goster=true;
            break;

            }
        }

    }


}


rafOlustur();

let kitapismi=prompt("Kitap ismi giriniz");
let kitapKOdu=kodBul(kitapismi);


if(kitapKOdu!=null){
    raftaGoster(kitapKOdu);
    rafOlustur();
}
else{
    console.log("Kitap bulunamadı");
}





