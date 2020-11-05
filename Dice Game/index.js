
var childs = document.getElementsByClassName("dice").length;
var childWithMaxValue;
var maxValue = 0;
var empate = false;

for(var i=0;i<childs;i++){

var randomNumber = Math.floor((Math.random())*6)+1;

var randomDiceImage = "dice" + randomNumber+".png";

var randomImageSource = "images/" + randomDiceImage;

var image = document.querySelectorAll("img")[i];

image.setAttribute("src",randomImageSource)
  
  if(maxValue < randomNumber ){
     maxValue = randomNumber;
     childWithMaxValue = i + 1;
  }else if(maxValue === randomNumber){
      empate = true;
  }

}
   if(empate === true){
       document.querySelector("h1").innerHTML ="Draw! 😮"
   }else{
       document.querySelector("h1").innerHTML = "Player "+childWithMaxValue+" Wins! 🚩";
   }