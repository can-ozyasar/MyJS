// tüm elementleri seçiyoruz 


const form=document.querySelector("#todoAddForm");
const addInput=document.querySelector("#todoName");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelector(".list-group")[0];
const secondCardBody=document.querySelectorAll(".list-group")[1];
const clearButton=document.querySelector("#clearButton");






let todos=[];
// modüler olacak şekilde fonksiyonları tanımlıyoruz


runEvents();
function runEvents() {
    form.addEventListener("submit",addTodo);
   
}

function addTodo(e) {

    const inputText=addInput.value.trim();// input değerini alıyoruz ve boşlukları siliyoruz
    if (inputText===""||inputText==null) { // eğer input değeri boşsa
        alert("Lütfen bir todo girin"); // uyarı veriyoruz
    } else {
        // eğer input değeri boş değilse

    //arayüze ekleme işlemi yapıyoruz
    addTodoToUI(inputText); // fonksiyonu çağırıyoruz
    addTodoToStorage(inputText); // local storage a ekliyoruz
    }



    e.preventDefault(); // formun submit olmasını engelliyoruz


}
   
function addTodoToUI(newTodo) {
    const li=document.createElement("li"); // yeni bir li elementi oluşturuyoruz
    li.className="list-group-item d-flex justify-content-between"; // class ekliyoruz
    li.textContent=newTodo; // input değerini li ye ekliyoruz
   
    const a=document.createElement("a"); // yeni bir a elementi oluşturuyoruz
    a.href="#"; // class ekliyoruz
    a.className="delete-item"; // class ekliyoruz
    const i=document.createElement("i"); // yeni bir i elementi oluşturuyoruz
    i.className="fa fa-remove"; // class ekliyoruz
    a.appendChild(i); // i elementini a ya ekliyoruz
    li.appendChild(a); // a elementini li ye ekliyoruz
    todoList.appendChild(li); // li elementini todo listesine ekliyoruz

    addInput.value=""; // input değerini sıfırlıyoruz
   // addInput.focus(); // inputa odaklanıyoruz

}
function addTodoToStorage(newTodo) {

//içi boşsa storage 0 dan başlat 
//eğer storage doluysa yeni todo ekle


checkTodosFromStorage()
todos.push(newTodo);
localStorage.setItem("todos",JSON.stringify(todos))


}

function checkTodosFromStorage(){

    if(localStorage.getItem("todos")==null) {
        todos=[]; // eğer storage boşsa boş bir dizi oluşturuyoruz
    }
    else {
        todos=JSON.parse(localStorage.getItem("todos")); // eğer storage doluysa diziyi alıyoruz
    }
    

}