class MarketBase {

    indirimOrani = 0.20; //markete üyelere yüzde 20 indirim olsun 
    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }



    hesapla() { //ortak hesapla metodunu üst yapıda yazdık .

        let odenecek_tutar = 0;

        if (this.urunleriKontrolEt(this.urunler)) {
            //sepet dolu 
            console.log("Sepet Dolu:")

            if (this.kartVarmi) {
                // kartı varsa 
                console.log("Money kartı var ")
                this.urunler.forEach(urun => { // indirimli tutar
                    odenecek_tutar += (urun.fiyat) * (1 - this.indirimOrani)

                });

            }
            else {
                console.log("Money kartı yok ")

                //kartı yoksa normal fiyat 

                this.urunler.forEach(urun => {
                    odenecek_tutar += (urun.fiyat)
                });

            }

        }
        else {
            console.log("Sepet boş")

            alert("En az bir tane ürün satın almalısınız")
        }
        return odenecek_tutar;

    }

    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length>0) {
            //alert("sepette urun yok ")
            return true;
        }
        return false;

}
}