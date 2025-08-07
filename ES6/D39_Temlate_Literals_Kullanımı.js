// TEMPLATE LİTERALS KULLANIMI 



//BU YÖNTEM KLASİK VE UZUN OLAN YÖNTEMDİ 
function write(firstName, lastName) {
    console.log("isim : " + firstName + " " + "soyisim : " + lastName)
}

write("Muhammed Can ", "Ozyasar")



//------------------------------------------------------------------------------------------//




//ŞİMDİ TEMPLATE LİTERALS İLE KULLANALIM 

function writeTemplateLiterals(firstName, lastName) {

    //AltGr basılı tutup iki kere ; tuşuna bas  şu işaret oluşacak  -->>  ``  
    console.log(`isim: ${firstName} Soyisim: ${lastName}`)


    // alt satırda yazdık algılar 
    console.log(`
        isim: ${firstName}
        Soyisim: ${lastName}
`)

}

writeTemplateLiterals("Muhammed Can ", "Ozyasar")


//  ${lastName} ile değişmeyene değerleri kullanbiliyoruz .
// tüm boşluk alt satıra geçme gibi enter hareketleri algılar


// örnek olarak fetch fonklarında kullanacağız ilerki derslerde 


function getUserById(userId){
    let url=`http://localhost:/users/${userId}`
    //fetch(url)
    console.log(url)
}
getUserById(77)  // bu değeri geçirebilmek için   ${userId}  metodunu kullanabiliriz