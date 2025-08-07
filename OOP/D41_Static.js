//! static anahtar kelimesi kullanımı 


//statik olan nesne bir kere oluşturulur vetüm üyeler için o kulanılır 
// nesne üretmeden kullanılabilir clas ismi ile 


class Matematik {
    topla(a, b) {
        console.log(`${a}+${b} = ${a + b}`)
    }
    static cikar(a, b) {
        console.log(`statik tanımlı fonksiyon -->>  ${a}-${b} = ${a - b}`)
    }
    carp(a, b) {
        console.log(`${a}*${b} = ${a * b}`)
    }
    bol(a, b) {
        console.log(`${a}/${b} = ${a / b}`)
    }

}


// todo  typescript konus araştırıla bilir 


// normalde sınıfın fonksiyonlarından topla carp gibi static olmayan fonksiyonlarını kullanabilmek için sınıftan nesne üretmek gerekliydi 

const mat1 = new Matematik() // nesne oluşturduk

mat1.topla(5, 5) // fonka eriştik 


//statik nesnelere erişme //! direkt class isimi ile erişilir nesne üretmeye gerek yok .


Matematik.cikar(10, 4)



class Insan {




    static languagesCount = 20;
    constructor(firstName, lastName, salary) {
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }

    writeInfo(){

        console.log(`this ile statik değişkene erişmeye çalışmada hata alınır 
            ${this.firstName}  
            ${this.lastName}
            ${this.salary}
          --->  ${this.languagesCount}`) // statik değişken
    }





    writeInfoStaticOzel(){

        console.log(`class ismi ile statik değişkene erişim sağlanabilir
            ${this.firstName}  
            ${this.lastName}
            ${this.salary}
          --->  ${Insan.languagesCount}`) // statik değişken için class ismi ile erişim
    }







}


const insan =new Insan("ali","can",1500) // nesne oluşturduk

insan.writeInfo() // özellikleri yazdırma metodunu çağırıyoruz 
//! ama bu metod statik olan değeri yazmaz. undifened hatası verir 

//? çıktı :

            // ali  
            // can
            // 1500
            // undefined






//? statik değerlere class ismiden statik olmayanlara nesne üzerinden erişilir


insan.writeInfoStaticOzel() // burada fonksiyon içinde class isminde çağırdık statik değişkeni 



//! statik değerler classa özgüdür yapılan değişiklik tüm nesnelerde uygulanır 
