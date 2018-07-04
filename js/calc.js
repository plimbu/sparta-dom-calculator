document.addEventListener("DOMContentLoaded", function() {
  console.log("THE DOME IS LOADED");
  //store number button
  var num1 = 0;
  var num2 = 0;
  var op = 0; //operator 0 = nothing 1=+, 2=-, 3=*, 4=/
  //store which turn we are on
  var turn1 = true;

  //targets buttons and assigns them to buttonNum array
  var buttonNum = document.getElementsByClassName("buttonNum");
  var display = document.getElementById('screen');
  var operator = document.getElementsByClassName('operator');

  var clr = document.getElementsByClassName('buttonClear');

  //used if statment to go through all buttons to find array value for each one

  clr[0].addEventListener('click', function() {
    //num1 and num2 set to 0
    num1 = 0;
    num2 = 0;
    display.innerHTML = "";

  });



  //button selector, buttons in different order so we cannot use an array to loop through and set button vals


  buttonNum[6].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "1";
    if (turn1 === true) {
      num1 = 1;
    } else {
      num2 = 1;
    }

  })

  buttonNum[7].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "2";
    if (turn1 === true) {
      num1 = 2;
    } else {
      num2 = 2;
    }

  })

  buttonNum[8].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "3";
    if (turn1 === true) {
      num1 = 3;
    } else {
      num2 = 3;
    }
  })

  buttonNum[3].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "4";
    if (turn1 === true) {
      num1 = 4;
    } else {
      num2 = 4;
    }
  })

  buttonNum[4].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "5";
    if (turn1 === true) {
      num1 = 5;
    } else {
      num2 = 5;
    }

  })

  buttonNum[5].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "6";
    if (turn1 === true) {
      num1 = 6;
    } else {
      num2 = 6;
    }

  })

  buttonNum[0].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "7";
    if (turn1 === true) {
      num1 = 7;
    } else {
      num2 = 7;
    }
  })

  buttonNum[1].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "8";
    if (turn1 === true) {
      num1 = 8;
    } else {
      num2 = 8;
    }
  })

  buttonNum[2].addEventListener("click", function(event) {
    event.stopPropagation();
    display.innerHTML = "9";
    if (turn1 === true) {
      num1 = 9;
    } else {
      num2 = 9;
    }

  })


  //if statments for operations
  if (turn1 === true) {
    operator[0].addEventListener('click', function(event) {
      display.innerHTML = "*";
      op = 3;
    });

    operator[1].addEventListener('click', function(event) {
      display.innerHTML = "/";
      op = 4;
    });

    operator[2].addEventListener('click', function(event) {
      display.innerHTML = "-";
      op = 2;
    });

    operator[3].addEventListener('click', function(event) {
      display.innerHTML = "+";
      op = 1;
    });

  }



})
