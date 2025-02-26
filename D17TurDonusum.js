/**
 * 
 * tür dönüşümleri 
 * 
 * strings,numbers booleans,undifined,and null.
 * object,function
 * 
 * 
 */



let a=5;
let b="10";
let c =Number(b);

//! int eçevirme
let d=parseInt(b);

//! float çevirme
let e=parseFloat(b);

//! stringe çevirme
let f=String(a);

//! boolean a çevirme
let g=Boolean(a);


let x=(55).toString();
console.log( typeof x);
console.log( x);

//! bool ifadeyi stringe çevirme
let sonuc=string(true)


// todo eğer let a=NUmber("10") dersek a=10 olur
// todo eğer let a=Number("a") dersek a=NaN olur
//! NaN=not a number demektir yani bu bir sayı demek değildir demek anlamına gelir 





// object türünü stringe çevirme 
let rakamlar =String([1,2,3,4,5,6,7,8,9,0]);
console.log(rakamlar);
console.log(typeof rakamlar);