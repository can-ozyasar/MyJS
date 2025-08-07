// Asenkron problemi 

//http istekleri 


setTimeout(() => {
}, 2000) // Biz şimdi burda 2 sn veriyoruz ama cevap 2 sn den fazla sürecek bir işlem ise hata olur  
// cevap kaç sn de dönecek bilmiyoruz bu yüden 





const users = [
    {
        userId: 5,
        post: "CAN POST 1"
    },
    {
        userId: 5,
        post: "CAN POST 2"
    },
    {
        userId: 5,
        post: "CAN POST 3"
    },
    {
        userId: 6,
        post: "ALİ POST 1"
    },
    {
        userId: 7,
        post: "BETÜL POST 1"
    }
]




//? callback ile çözelim problemi 



//user ıd
//post by user ıd

function getUserId(callback) {

    setTimeout(() => {

        let userId = 7;
        //apiye gidip değerleri alan fonksiyon simülesi olsun 
        callback(userId);
    }, 1000)
}






function getPostByUserId(userId) {

    
    setTimeout(() => {
        // apiden gelen userıd ile diziden bulmaya çalışalım .
        users.forEach((user) => {
            if (user.userId === userId) {

                console.log(user.post)
            }
        })
    }, 500)


}



getUserId(getPostByUserId);

// let userId = getUserId(); // userID yi yakalamış olmaız lazım 5 olarak 


// getPostByUserId(userId); // normalde 5 id sine sahip postları bulmalıydı 

//?  user id yi bulmak için fonk çalışıyor  sonra ıd den post bulacak kod çlaışıyor ilk kodun bitmesi 1 sn dürüyor diğe kod ise 0.5 sn de bitiyor
//?  yani 2. fonka gitmesi gereken userıd değeri üreten fonk daha sonuc üretme aşamasında iken 2. fonka user ıd değeri gitmiyor v e hatalı sonuc üretiyor . 