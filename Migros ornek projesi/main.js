let mesaj =
    `
Markets'e Hoşgeldiniz.
Money Kartınız varmı? 
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmı: "süt",
        fiyat: 80
    },
    {
        urunIsmı: "bebek Bezi",
        fiyat: 100
    },
    {
        urunIsmı: "Tavuk",
        fiyat: 220
    }
]
let sonuc = confirm(mesaj)
let odenecek_tutar;



if (sonuc) {
    //money kartı var
    let isim = prompt("isminizi giriniz .")
    let soyisim = prompt("soyisiminizi giriniz .")

    const musteri = new Musteri(isim, soyisim, sonuc, urunler)

    odenecek_tutar = musteri.hesapla() // ödenecek tutarın hesaplanması 


    alert(`
        Müşteri bilgileri : ${musteri.isim} ,${musteri.soyisim}
        Ödenecek Tutar = ${musteri.hesapla()}, 
        
        `)

}

else {
    // money kartı yok
    const musteri=new Musteri(null,null,sonuc,urunler)
    odenecek_tutar=musteri.hesapla()
    alert(`Ödenecek Tutar : ${odenecek_tutar}`)

}