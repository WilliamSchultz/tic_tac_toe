/*function navCells() {
var singleDimArray = [
	

	for(c=1;c<=9;++c) Checks if a box has been clicked 

		document.getElementById("cell_"+c).onclick=
	function(){
		alert("you clicked me"); 
	}
} 
for(c=1;c<=9;++c)  

		document.getElementById("cell_"+c).onclick=
	function(){
		alert("you clicked me"); 
	}
} 



cellArray[x-1)%3][Math.floor((n-1)/3)] = 
	document.getElementById....


for (c=0;c<=2;++c)
	if(cellAray[0][c] == 'X' && cellArray[1][c] == 'X' && 
		cellArray[2][c] =='X')
		alert("X won in column " + c); 
*/




var turn =1;

function playBox(){

	switch(turn)
	{
		case 1:
		event.target.innerHTML = "X";
		break;

		case 2:
		event.target.innerHTML = "0";
		break;

		case 3:
		event.target.innerHTML = "X";
		break;

		case 4:
		event.target.innerHTML = "0";
		break;

		case 5:
		event.target.innerHTML = "X";
		break;

		case 6:
		event.target.innerHTML = "0";
		break;

		case 7:
		event.target.innerHTML = "X";
		break;

		case 8:
		event.target.innerHTML = "0";
		break;

		case 9:
		event.target.innerHTML = "X";
		break;

	}
	turn += 1; 


var sqr1 = document.getElementById("cell_1").innerHTML; 
var sqr2 = document.getElementById("cell_2").innerHTML;
var sqr3 = document.getElementById("cell_3").innerHTML;
var sqr4 = document.getElementById("cell_4").innerHTML;
var sqr5 = document.getElementById("cell_5").innerHTML;
var sqr6 = document.getElementById("cell_6").innerHTML;
var sqr7 = document.getElementById("cell_7").innerHTML;
var sqr8 = document.getElementById("cell_8").innerHTML;
var sqr9 = document.getElementById("cell_9").innerHTML;


  if(sqr1 == "X" && sqr2 == "X" && sqr3 == "X")
  {
    alert("X Wins!");
    reset();
  } 
  else if(sqr4 == "X" && sqr5 == "X" && sqr6 == "X")
  {
    alert("X Wins!")
    reset()
  } 
  else if(sqr7 == "X" && sqr8 == "X" && sqr9 == "X")
  {
    alert("X Wins!")
    reset()
  }
  else if(sqr1 == "X" && sqr5 == "X" && sqr9 == "X")
  {
    alert("X Wins diag!")
    reset()
  }
  else if(sqr1 == "X" && sqr4 == "X" && sqr7 == "X")
  {
    alert("X Wins!")
    reset()
  }
  else if(sqr2 == "X" && sqr5 == "X" && sqr8 == "X")
  {
    alert("X Wins!")
    reset()
  }
  else if(sqr3 == "X" && sqr6 == "X" && sqr9 == "X")
  {
    alert("X Wins!")
    reset()
  }
  else if(sqr3 == "X" && sqr5 == "X" && sqr7 == "X")
  {
    alert("X Wins!")
    reset()
  }



if(sqr1 == "O" && sqr2 == "O" && sqr3 == "O")
  {
    alert("O Wins!");
    reset();
  } 
  else if(sqr4 == "O" && sqr5 == "O" && sqr6 == "O")
  {
    alert("0 Wins!")
    reset()
  } 
  else if(sqr7 == "O" && sqr8 == "O" && sqr9 == "O")
  {
    alert("0 Wins!")
    reset()
  }
  else if(sqr1 == "O" && sqr5 == "O" && sqr9 == "O")
  {
    alert("0 Wins diag!")
    reset()
  }
  else if(sqr1 == "O" && sqr4 == "O" && sqr7 == "O")
  {
    alert("0 Wins!")
    reset()
  }
  else if(sqr2 == "O" && sqr5 == "O" && sqr8 == "O")
  {
    alert("0 Wins!")
    reset()
  }
  else if(sqr3 == "O" && sqr6 == "O" && sqr9 == "O")
  {
    alert("0 Wins!")
    reset()
  }
  else if(sqr3 == "O" && sqr5 == "O" && sqr7 == "O")
  {
    alert("0 Wins!")
    reset()
  }

} 



function reset(){
	for(i=1;i<=9;++i)
		document.getElementById("cell_"+i).innerHTML = "";
}

