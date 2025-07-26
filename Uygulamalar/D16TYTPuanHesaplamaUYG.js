// tyt puan hesaplama uygulaması için bir kod yazacağız bu bölümde 



/************************************************************************************************
 * 
 * 
 * 
 * ? sorular
 * türkçe 40
 * matematik 40
 * ,fen 20
 * sosyal 20
 */

let turkce=40;
let matematik=40;   
let fen=20;
let sosyal=20;
let puan=0;


let turkceDogru=Number(prompt("Türkçe  DOGRU sorularınızı giriniz"))
let turkceYanlis=Number(prompt("Türkçe  YANLIŞ sorularınızı giriniz"))

let matDogru=prompt("Matematik DOĞRU sorularınızı giriniz")
let matYanlis=prompt("Matematik YANLIS sorularınızı giriniz")


let fenDogru=Number(prompt("Fen DOĞRU sorularınızı giriniz"))
let fenYanlis=Number(prompt("Fen YANLIŞ sorularınızı giriniz"))

let sosyalDogru=Number(prompt("Sosyal DOĞRU sorularınızı giriniz"))
let sosyalYanlis=Number(prompt("Sosyal YANLIŞ sorularınızı giriniz"))

let ortalama=Number(prompt("okul puanınız kaç kaç"))

// 4 yanlış 1 doğruyu götürüyor
puan+=(turkceDogru-turkceYanlis-(turkceYanlis/4))*2+(matDogru-matYanlis-(matYanlis/4))*4+(fenDogru-fenYanlis-(fenYanlis/4))*4+(sosyalDogru-sosyalYanlis-(sosyalYanlis/4))*1.6
puan+=100+ortalama*0.6

alert("Puanınız : " + puan)