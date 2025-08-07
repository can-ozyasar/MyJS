//AJAX KULLNIMI çok eski bir yöntem

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