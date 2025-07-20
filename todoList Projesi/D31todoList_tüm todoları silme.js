// tüm elementleri seçiyoruz 


const form=document.querySelector("#todoAddForm");
const addInput=document.querySelector("#todoName");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clearButton=document.querySelector("#clearButton");






let todos=[];
// modüler olacak şekilde fonksiyonları tanımlıyoruz


runEvents();

function runEvents() {

    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded); // sayfa yüklendiğinde storage kontrol ediliyor ekelem yapacağız
   secondCardBody.addEventListener("click",removeTodoUI); // todo silme işlemi için
    clearButton.addEventListener("click",allTodosEveryWhere) // tüm todoları simke için izleyici kurduk 

}

function allTodosEveryWhere(){

const todoListesi=document.querySelectorAll(".list-group-item");

//ekranda todo olmayabilir 
if(todoListesi.length>0){
    // ekrandan silme işlemi 
    todoListesi.forEach(function(todo){
        todo.remove();
    })
        showAlert("success","Tüm ToDo'lar başarılı bir şekilde silindi")

// storageden silme işlemi 
    todos=[]; // todosu boşalt 
    localStorage.setItem("todos", JSON.stringify(todos)); // json formatında storageye kaydet.
    showAlert( "success","Tüm ToDo'lar storageden de silindi")


}else{
    showAlert("warning","Silmek için en az bir todo olmalıdır ")
}

console.log(todoListesi)

}


function removeTodoUI(e) {

    console.log(e.target); // tıklanan elementi konsola yazdırıyoruz
    if (e.target.className==="fa fa-remove") { // eğer tıklanan element fa fa-remove ise bu da çarpı işaretine basmış demek 
        
        
        console.log("çarpıya basmıştır"); // çarpıya basınca  çarpıya bastığını konsola yazdırıyoruz
      
      
        const silinecekTodo = e.target.parentElement.parentElement; // silinecek todo yu alıyoruz


        // todo yu arayüzden siliyoruz
       //! ekrandan silme işlemi yapıyoruz
        silinecekTodo.remove(); // li elementini siliyoruz  
        //çarpının bir üstüne gidiyoruz burada a etiketleri var bunun da bir üstü olan li yi seçip siliyoruz .
        //e.target i etiketi
        //e.target.parentElement a etiketi
        //e.target.parentElement.parentElement li etiketi
        
        //! storageden de silelim
        const todoText = silinecekTodo.textContent; // li içindeki todo metnini alıyoruz
        
        
        removeTodoFromStorage(todoText); // storage dan silme fonksiyonunu çağırıyoruz
        showAlert("success","todo başarıyla silindi."); // uyarı veriyoruz
    }

    

}

function removeTodoFromStorage(removeTodoText) {
    checkTodosFromStorage(); // storage kontrol ediliyor
   

    todos.forEach(function(todo, index) { // todos dizisinde her bir todo için
        if (todo === removeTodoText) { // eğer todo metni silinecek todo hem todo hemde indexi seçebiliriz
            todos.splice(index, 1); // diziden silme işlemi yapıyoruz o indexten başla 1 tane sil demek bu 
            console.log("Todo silindi: " + todo); // konsola yazdırıyoruz
        
        // burada bir açık oluşabilir .
        // aynı isimi yapan birden fazla todo varsa sadece ilkini siler
        // bunu engellemek için forEach yerine filter kullanabiliriz

            return; // silme işlemi yapıldıktan sonra döngüden çıkıyoruz ama işe yaramadı diğer değeri de sildi 
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos)); // güncellenmiş todos dizisini local storage a kaydediyoruz
    console.log("Storage güncellendi"); // konsola yazdırıyoruz
}





function pageLoaded() {
    checkTodosFromStorage(); // storage kontrol ediliyor
    todos.forEach(function(todo) { // her bir todo için
        addTodoToUI(todo); // todo yu arayüze ekliyoruz
        //? console.log(todo); // konsola yazdırıyoruz kontrol etmek amacıyla
    });
    checkTodosFromStorage(); // storage kontrol ediliyor



}
function addTodo(e) {

    const inputText=addInput.value.trim();// input değerini alıyoruz ve boşlukları siliyoruz
    if (inputText===""||inputText==null) { // eğer input değeri boşsa
        alert("Lütfen bir todo girin"); // uyarı veriyoruz


        //şimdi uyarı ile alert vereceğiz 
            showAlert("warning","todo eklenmedi."); // uyarı veriyoruz


    } else {
        // eğer input değeri boş değilse

    //arayüze ekleme işlemi yapıyoruz
    addTodoToUI(inputText); // fonksiyonu çağırıyoruz
    addTodoToStorage(inputText); // local storage a ekliyoruz
    showAlert("success","todo eklendi."); // uyarı veriyoruz
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
document.addEventListener("DOMContentLoaded",pageLoaded); // sayfa yüklendiğinde storage kontrol ediliyor ekelem yapacağız 
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




//  todomuza uyarı ekelme işlemleri ders 81 

function showAlert(type,message){
    
//  <div class="alert alert-warning" role="alert">
//                      This is a success alert—check it out!
//                     </div>


const div=document.createElement("div"); // yeni bir div elementi oluşturuyoruz
div.className=`alert alert-${type}`; //`litrel template class ekliyoruz 
div.textContent=message; // divin içeriğini ayarlıyoruz
firstCardBody.appendChild(div); // divi ilk card body ye ekliyoruz



setTimeout(function() {
    div.remove(); // divi siliyoruz{
    
}, 2000); // 2 saniye sonra siliniyor uyarı ekranımız
console.log("alert silindi"); // konsola yazdırıyoruz

}



// ders 82 storage den alınan  bilgileri yazdırma işlemi

function pageLoaded() {
    checkTodosFromStorage(); // storage kontrol ediliyor
    todos.forEach(function(todo) { // her bir todo için
        addTodoToUI(todo); // todo yu arayüze ekliyoruz
    });
    
}