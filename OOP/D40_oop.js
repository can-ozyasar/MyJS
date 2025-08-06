//  oop dersleri 



class Insan { //sinif

    // constructor() { //yapici metod 
    //     console.log("yapıcı metod çalıştı")

    // }


    constructor(isim, soyisim) { //kurucu metod 
        debugger
        this.isim = isim
        this.soyisim = soyisim

    }


    bilgilerigoster() {
        debugger
        console.log(`isim : ${this.isim} soyisim ${this.soyisim}`)

    }




}

//Insan nesnssi oluşturma  () kurucusu parametreli ise girilebililr
const Insan1 = new Insan("canan", "yılduz")
const Insan2 = new Insan("ahmet", "ali")

Insan1.bilgilerigoster()
Insan2.bilgilerigoster()