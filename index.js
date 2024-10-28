let randomNumber1=Math.floor(Math.random()*6)+1; //1-6
var randomDiceImage="dice"+ randomNumber1 + ".png"; //dice1.png -dice6.png
var randomImageSource = "images/" + randomDiceImage; //image/dice1.png-image/dice6.png

var image1=document.querySelectorAll("img")[0];
// document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
image1.setAttribute("src", randomImageSource);



let randomNumber2 =Math.floor(Math.random()*6)+1;
var randomImageSource1= "images/dice"+ randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1);



if(randomNumber1< randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 won";
}
else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player 1 Won";
}
else{
    document.querySelector("h1").innerHTML="Draw";
     
}