/*function navCells() {
var singleDimArray = [
	

	for(c=1;c<=9;++c) Checks if a box has been clicked 

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

function playBox(q){

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
}



