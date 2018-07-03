document.addEventListener("DOMContentLoaded", function(){
  console.log("THE DOME IS LOADED");
//store number button
var numberButton;


var buttonNum = document.getElementsByClassName("buttonNum");


function returnI(j){

  return function()
  {

    console.log(j);

  }


}


for (var i = 0; i < buttonNum.length; i++) {
  buttonNum[i].addEventListener("click", returnI(i))

}



})
