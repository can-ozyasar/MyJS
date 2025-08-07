// SET KULLANIMI 

//SETLER DİZİLERİN altenatifi olarak  farkı koyulan değerler eşsizdir .
//tutulan değerler birdaha eklenemez 


const set =new Set();


//add  metodu  ekleme işlemleri için kullanılır 

set.add("true")
set.add("3.14")
set.add("MUHAMMED CAN")
set.add(3)
set.add({USERNAME:  "CAN",PASSWOR :"1"})
set.add([1,2,3,4])


///set in eleman sayısını console ye yazdıralım 
console.log("set eleman sayısı ",set.size)



//sete aynı elemanı eklemeye çalışalım 

set.add("MUHAMMED CAN")
set.add("MUHAMMED CAN")
set.add("MUHAMMED CAN")
set.add("MUHAMMED CAN")

console.log("aynu elemanı eklemeden sonra eleman sayısı",set.size)

//! setin özelliği >>>>>---- eklenen eleman birdaha eklenmiyor buna izin verilmiyor  ....




//size metodu  eleman sayısını verir .
console.log(set.size)



//delete 
set.delete("MUHAMMED CAN")



//? REFERANS DEĞERİ OLAN DİZİ VE OBJELERİ DİREKT OLARAK set.delete([1,2,3,4])
//?YÖNTEMİ İLE SİLEMEYİZ

set.delete([1,2,3,4]) // ! Değeri silmez 
//bunun yerine direkt bellekte o bölgeyi gösteren bir değeri vermeliyiz örnek olarak 

// const dizi=[1,2,3,4]  set.delete(dizi)
//yöntemi siler 




//has metodu (o değer varmı yokmu )
console.log("3 değeri varmı : ",set.has(3))



//for of döngüsü 
console.log("for of kullanımı")
for(let value of set){

    console.log(value)
}

console.log("------------------------------------------")


console.log("set den array oluşturma")
const values=Array.from(set)
console.log(values)


console.log("foreach ile yazdırma ")
values.forEach((value)=>{
    console.log(value)
})



// set den aray oluşturma

const value=Array.from(set)
console.log("set den array oluşturma ",value)


// array dan set oluşturma
let array =[1, "Enes",true,"Mustafa",15,[1,2,3]]

const newset=new Set(array)
console.log("array dan set oluşturma  ",newset)

