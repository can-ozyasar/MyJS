// this super super() kullanımları 


class Person {


    constructor(firstName) {
        this.firstName = firstName
    }

    write() {
        console.log(this)
    }
}


const person = new Person("Hakkı");
person.write();

// ! HER SINIF "Object" SINIFINDAN DAN KALITIM ALMIŞTIR 




class Kisi {

    firstName = "ozan";
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

    }

    write() {
        console.log("Kisi classı çalıştı   ", this.firstName)
    }
    writeInfo() {
        console.log(`
            ${this.firstName}  ${this.lastName}  ${this.salary}`)



    }


}


class Student extends Kisi {


    constructor(firstName, lastName, salary) {
        super(firstName, lastName, salary) // üst sınıfın kurucu metodu 

    }


    write() {
        console.log(`\nStudent classı write içeriği  `)
        super.write() // üst sınıfın write metodunu çağırdık super ile 
    }

    writeInfoStudent() {

        super.writeInfo(); // üst sınıfın writeInfo metodunu çağırdı 
    }


}

const student1 = new Student("özmen", "karay", 10000);
student1.write();
student1.writeInfoStudent();