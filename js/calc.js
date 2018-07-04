document.addEventListener("DOMContentLoaded", function() {
  console.log("THE DOME IS LOADED");
  //store number button
  var num1 ;
  var num2 ;
  var op ; //operator 0 = nothing 1=+, 2=-, 3=*, 4=/
var turn1 =1;

  //targets buttons and assigns them to buttonNum array
  var buttonNum = document.getElementsByClassName("buttonNum");
  var display = document.getElementById('screen');
  var operator = document.getElementsByClassName('operator');

  var clr = document.getElementsByClassName('buttonClear');
  var eq = document.getElementsByClassName('equals');


  //used if statment to go through all buttons to find array value for each one

  clr[0].addEventListener('click', function() {
    //num1 and num2 set to 0
    num1 = 0;
    num2 = 0;
    display.innerHTML = "";
turn1 = 1;//reset to turn1
  });



  //button selector, buttons in different order so we cannot use an array to loop through and set button vals

  //store which turn we are on -1=turn1 , 2=turn2


  buttonNum[6].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "1";
    if (turn1 === 1) {
      num1 = 1;
    } else {
      num2 = 1;
    }



  })

  buttonNum[7].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "2";
    if (turn1 === 1) {
      num1 = 2;
    } else {
      num2 = 2;
    }



  })

  buttonNum[8].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "3";
    if (turn1 === 1) {
      num1 = 3;
    } else {
      num2 = 3;
    }
  })

  buttonNum[3].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "4";
    if (turn1 === 1) {
      num1 = 4;
    } else {
      num2 = 4;
    }
  })

  buttonNum[4].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "5";
    if (turn1 === 1) {
      num1 = 5;
    } else {
      num2 = 5;
    }

  })

  buttonNum[5].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "6";
    if (turn1 === 1) {
      num1 = 6;
    } else {
      num2 = 6;
    }

  })

  buttonNum[0].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "7";
    if (turn1 === 1) {
      num1 = 7;
    } else {
      num2 = 7;
    }
  })

  buttonNum[1].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "8";
    if (turn1 === 1) {
      num1 = 8;
    } else {
      num2 = 8;
    }
  })

  buttonNum[2].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "9";
    if (turn1 === 1) {
      num1 = 9;
    } else {
      num2 = 9;
    }

  })


  //if statments for operations
  if (turn1 === 1) {
    operator[0].addEventListener('click', function(event) {
      display.innerHTML = "*";
      op = 3;
      turn1 =2;

    });

    operator[1].addEventListener('click', function(event) {
      display.innerHTML = "/";
      op = 4;
      turn1 =2;

    });

    operator[2].addEventListener('click', function(event) {
      display.innerHTML = "-";
      op = 2;
      turn1 =2;

    });

    operator[3].addEventListener('click', function(event) {
      op = 1;
      turn1 =2;
      display.innerHTML = "+";

    });
//important
//had to put if statement in otherwise it wouldn't get turn1===2 as the if statement runs instantly
//we need to listen for if statement only when we press "=""
    //equal function for phase 2
  //wait for equal button to be clicked before making calculaations
    eq[0].addEventListener('click' , function(event){

      //next turn
        if(turn1 === 2)
        {
      var answ;
if(op==1)
{
  answ = num1 +num2;

}
if(op==2)
{
  answ = num1 -num2;

}
if(op==3)
{
  answ = num1 *num2;

}
if(op==4)
{
  answ = num1 /num2;

}


        display.innerHTML = (answ);


  turn1 =true;//reset back to turn1


num1=0;
num2=0;
}



});

}
});
