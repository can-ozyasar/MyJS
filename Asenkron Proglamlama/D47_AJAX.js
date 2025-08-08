//AJAX KULLNIMI çok eski bir yöntem (ASENKRON JAVASCRİPT AND XML)

// Server dan veri alma işleminde servera gitmemizi gelmemizi sağlayan yapı 

const xml = new XMLHttpRequest()


console.log(xml)
// bunun içinde  bizim içiin önemli olan değerler şunlar 

//status 200 başarılı 403 bulunamadı 404 sayfa mevcut değil 

// readyState  
//  0 istek atılmadı 
//  1 server bağlantısı gönderildi 
//  2 istek karşıya ulaştı 
//  3 isteği işliyorum 
//  4  istek tamamlandı ve cevap hazır

//? başarılı işlemde status 200 ve readyState 4 olmalıdır 


// responseText  cevap metnini almada kullanılır

//onereadystatechange readystate değiştiğinde bir işlem yaptırmak için kullanılır 



//İSTEK ATMA 

function prepareURL(url, id) {

    if (id === null) { // eğer id yoksa direkt url döndür 
        return url
    }
    return `${url}?potsId=${id}` //url varsa onu da döndür

}

function getComments(url, id) { // giidlecek adres (url)  ve sonuçları getirilecek kullanıcı (id)

    let NewUrl = prepareURL(url, id); // yeni url yi aldık 

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {// başarılı sonuç için gerekli koşullar üstte de anlattığım gibi 
           
            console.log(typeof (xhr.responseText)) // gelen veri string olarak geliyor
           
            console.log(JSON.parse(xhr.responseText)) // string olarak gelen veiryi JSON formatına çevirdik veriyi
        }
    })


    xhr.open("GET", NewUrl) // open metodu ile istek açtık
    xhr.send()//gönderdik




}



function getData(url){



    const xhr=new XMLHttpRequest()
    xhr.addEventListener("readystatechange",()=>{

        if(xhr.readyState===4&& xhr.status===200){

            console.log(JSON.parse(xhr.responseText))
        }
    })

    xhr.open("GET",url)
    xhr.send()
}

getComments("https://jsonplaceholder.typicode.com/comments", null) // tüm değerleri getirmesi için null girdik id ye genel bir id girmedik yani
getData("https://jsonplaceholder.typicode.com/users") // kulanıcıları geitrmek için 


