//? Promise Yapısı



let check = true;
const promise1 = new Promise((resolve, reject) => { /// kabul etme ve reddetme fonksiyonları

    if (check) {// işlem başarılı ise resolve tetikleriz
        resolve("Promise Başarılı") //? state fullfield olur
    }
    else { // işlem başarısız ise reject i tetikleriz 
        reject("Promise Başarısız !!!")// ?state rejected olur 
    }
})

console.log(`${promise1} \n\n \n\n`)





//?          KULLANIMI
let check1 = true;

function createPromise() {
    return new Promise((resolve, reject) => {
        if (check1) {
            resolve("Promisede Herhangi bir sıkıntı yok ")
        }
        else {
            reject("Sıkıntı büyük")
        }




    })
}



createPromise()
.then((response)=>{ // başarılı ise .then //! resolve içine yazılan parametre buraya geçer 
    
    console.log(response)
})   

.catch((error)=>{ // eğer bir hata var ise catch ile yakalanır //! reject içine yazılan parametre buraya geçer 

    console.log(error)
})

.finally(()=>{  //? finaly her zaman çalışır başarılı da olsa başarısız da olsa çalışır
    console.log("her zaman çalışır")
})







