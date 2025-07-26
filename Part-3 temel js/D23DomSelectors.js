// Selectors seçiciler özellikleri - Style özelikleri



// classname  , id , tag name 


// getElementById : id ye göre element seçme işlemleri için kullanılır 




const button =document.getElementById(  "todoAddButton");

console.log(button.id); // idsini görüntüleme 
console.log(button.getAttribute("id")); // attirbute : özellikler 

console.log(button.className); // class adını görüntüleme 
console.log(button.getAttribute("class")); // attirbute : özellikler 



const classList=button.classList;

console.log(classList); // classlist görüntüleme
console.log(classList[2]); //  indisteki class görüntüleme


// foreach ile dizi yi gezerek class ları yazdırma 
classList.forEach(element => {
 console.log(element); // class   
});





//  alınan elementin text ini alıyoruz iki farklı biçimde 
let buttonText=button.textContent; // !  sadece string olarak alır
let buttonText2 = button.innerHTML; // ! yanında bulunan html etiketlerini de alır ( p a )


console.log(buttonText); // class
console.log(buttonText2);




// todo deneyelim aralarındaki farkı görelim 


button.textContent="<b>texcontent ile değiştirme işlemi<b>"
console.log(button.textContent); // string gibi algılar html yi uygulamaz

button.innerHTML="<b>innerhtml ile değiştirme <b>";

console.log(button.textContent); // html leri algılar ve uygular 






console.log("***********************************************************");


const todoList= Array.from(  document.getElementsByClassName("list-group-item"));

console.log(todoList); 

todoList.forEach(function(todo){

    console.log(todo);
    console.log(todo.className); // class  isimleri

    console.log(todo.textContent);// içeriğindeki metin ler 


})

console.log("***********************************************************");



const  forms=document.getElementsByTagName("form");
console.log(forms);
console.log(forms[1]);
console.log(forms[1].id);


//// ! getElementById ,getElementByClassName,getElementByTagName

// hepsini de getirebilen tek bir fonksiyon var


//? .......querySelector  --  querySelectorAll ................


 // parametre olarak class name id name gibi değerleri css de olduğu gibi vermek gerekiyor  örnek #button (id ile ) yada .button (class name ile ) gibi 
let clearButton=document.querySelector("#todoClearButton");
console.log(clearButton);
clearButton=document.querySelector(".list-group");
console.log(clearButton);

console.log(document.getElementById("todoClearButton")) // aynı işi yapar üstteki ile 

console.log(document.getElementsByClassName("list-group")) // aynı işi yapar üstteki  ile 




//class issminde birden fazla  olursa  querySelectorAll ı kullanmak gererkli  


let todoLit=document.querySelectorAll(".list-group-item");
console.log(todoLit);
todoLit=document.querySelectorAll(".list-group-item")[2]; //2. indexteki veri
todoLit=document.querySelectorAll(".list-group-item")[document.querySelectorAll(".list-group-item").length-1]; //! eğer uzunluğu bilmiyorsaka sondaki elamanı almak için



// ! o elemanlardan indexi tek olanları seçer (odd) --rengini açık gri yapar 
const todolist=Array.from(document.querySelectorAll("li:nth-child(odd"));

todolist.forEach(function(todo){
  
    todo.style.backgroundColor="lightgrey";
})
console.log(todolist);




// ! o elemanlardan indexi çift olanları seçer(even)- ve rengini açık mavi yapar
let todoliste=Array.from(document.querySelectorAll("li:nth-child(even"));

todoliste.forEach(function(todo){
  
    todo.style.backgroundColor="lightblue";
})
console.log(todoliste);





// const component=document.querySelectorAll(".list-group-item")
// // console.log(component);

// let i=0;
// let todo;
//  while (i<4){

//      todo=component[i]
//      console.log("-------------------");
//      console.log(todo);
     
//     todo.style.backgroundColor="red";
    
//     i++;
      


//  }

const component = document.querySelectorAll(".list-group-item");
const colors = ["red", "orange", "magenta", "yellow", "blue"];
let delay = 500; // Renkler arası gecikme (milisaniye)


component.forEach((item, index) => {
  if (index < colors.length) {
    setTimeout(() => {
      item.style.backgroundColor = colors[index];
      console.log("-------------------");
      console.log(item);
    }, delay * index); // Her öğe için gecikmeyi artır
  }
});





