let i=0
function myFunction(but) {
    if(i%2==0)
    document.getElementById(but).innerHTML="0";
    else
    document.getElementById(but).innerHTML="X";
    i++;
    checkResult();
  }

  function playAgain(){
      document.getElementsByClassName("play").innerHTML=""
  }
  function checkResult(){
      if(document.getElementById("00").innerHTML=="0"&&document.getElementById("01").innerHTML=="0"&&document.getElementById("02").innerHTML=="0")
      alert("player 0 wins")
      else if(document.getElementById("00").innerHTML=="X"&&document.getElementById("01").innerHTML=="X"&&document.getElementById("02").innerHTML=="X")
      alert("player X wins")

      else if(document.getElementById("10").innerHTML=="0"&&document.getElementById("11").innerHTML=="0"&&document.getElementById("12").innerHTML=="0")
      alert("player 0 wins")
      else if(document.getElementById("10").innerHTML=="X"&&document.getElementById("11").innerHTML=="X"&&document.getElementById("12").innerHTML=="X")
      alert("player X wins")

      else if(document.getElementById("20").innerHTML=="0"&&document.getElementById("21").innerHTML=="0"&&document.getElementById("22").innerHTML=="0")
      alert("player 0 wins")
      else if(document.getElementById("20").innerHTML=="X"&&document.getElementById("21").innerHTML=="X"&&document.getElementById("22").innerHTML=="X")
      alert("player X wins")

      else if(document.getElementById("00").innerHTML=="0"&&document.getElementById("10").innerHTML=="0"&&document.getElementById("20").innerHTML=="0")
      alert("player 0 wins")
      else if(document.getElementById("00").innerHTML=="X"&&document.getElementById("10").innerHTML=="X"&&document.getElementById("20").innerHTML=="X")
      alert("player X wins")

      else if(document.getElementById("01").innerHTML=="0"&&document.getElementById("11").innerHTML=="0"&&document.getElementById("21").innerHTML=="0")
      alert("player 0 wins")
      else if(document.getElementById("01").innerHTML=="X"&&document.getElementById("11").innerHTML=="X"&&document.getElementById("21").innerHTML=="X")
      alert("player X wins")

      else if(document.getElementById("02").innerHTML=="0"&&document.getElementById("12").innerHTML=="0"&&document.getElementById("22").innerHTML=="0")
      alert("player 0 wins")
      else if(document.getElementById("02").innerHTML=="X"&&document.getElementById("12").innerHTML=="X"&&document.getElementById("22").innerHTML=="X")
      alert("player X wins")


      else if(document.getElementById("00").innerHTML=="0"&&document.getElementById("11").innerHTML=="0"&&document.getElementById("22").innerHTML=="0")
      alert("player 0 wins")
      else if(document.getElementById("00").innerHTML=="X"&&document.getElementById("11").innerHTML=="X"&&document.getElementById("22").innerHTML=="X")
      alert("player X wins")

      else if(document.getElementById("02").innerHTML=="0"&&document.getElementById("11").innerHTML=="0"&&document.getElementById("20").innerHTML=="0")
      alert("player 0 wins")
      else if(document.getElementById("02").innerHTML=="X"&&document.getElementById("11").innerHTML=="X"&&document.getElementById("20").innerHTML=="X")
      alert("player X wins")
  }
