var randomNumber1= Math.floor(Math.random() * 6) + 1;
var randomNumber2= Math.floor(Math.random() * 6) + 1;

var randomImg1= document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
var randomImg2= document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");



if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1")[0].textContent="the winner is player 1!";

}else if (randomNumber1<randomNumber2){
    document.querySelectorAll("h1")[0].textContent="the winner is player 2!";

}else{
    document.querySelectorAll("h1")[0].textContent="Its a Draw!";

}