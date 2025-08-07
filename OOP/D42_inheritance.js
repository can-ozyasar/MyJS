// inheritance - kalıtım kullanımı 

// genelden kılıtım almak için kullanılabililr insan <--- öğrenci , çalışan  vss

class Person{
    firstName="Mete";
    write(){
        console.log(`Person sınıfı write metodu ${this.firstName}`)
    }
}

const kisi =new Person()
kisi.write()

class Student extends Person{ // persondaki özelikleri burada tekrar yazmadan kalıtım aldıralım "extends" ile .

write(){
    console.log(`Person sınıfından geldi --->  ${this.firstName}`)
    console.log(` Student write metodu içinde üst sınıf write metodu ---->${super.write()}`) 
}


//todo "this" kendi içinde bulunduğu sınıf özellikleri için , 
//todo "super" üst sınıf  içeriklerine erişmek için kullanılır 

}