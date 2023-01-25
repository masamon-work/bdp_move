// var element = document.querySelector("header");
// var button = document.querySelector("");
var x = 0; //viewクラスの付与状況

// button.addEventListener("click",function(){
//     if (x === 0){
//         element.classList.add("view");
//         x = 1;
//     } else { //opは0じゃない、op===1
//         element.classList.remove("view");
//         x = 0;
//     }
// });

// setInterval(function(){
//     if (x === 0){
//         element.classList.add("view");
//         x = 1;
//     } else { //opは0じゃない、op===1
//         element.classList.remove("view");
//         x = 0;
//     }
// },2000);

// var x =document.querySelector(".back");

// setInterval(function(){
//     if($(".back-top").hasClass(".A")){
//         $(this).classList.remove(".A")
//         $(this).classList.add(".B")
//     } else {
//         $(this).classList.remove(".B")
//         $(this).classList.add(".A")
//     }
// },10000);

let posiValue1 = "83%" 
setInterval(function(){
    if(posiValue1 === "83%"){
        posiValue1 = "0%";
    } else if(posiValue1 === "0%"){
        posiValue1 = "83%";
    }
    $(".back-top").animate({left:posiValue1});
},3000);