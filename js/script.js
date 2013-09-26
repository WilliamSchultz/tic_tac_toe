
<div id="content">Hello world</div>

<input type="button" id="btn1" value="click me!" onclick="pesterButtonClick()" />

<input type="checkbox" id="ckSpicy" /> Really pester you with spicy comments

<br />
<a href="ticTacToe.html">Tic Tac Toe Game!</a>

<input type="button" value="Tic Tac Toe" onclick="navTicTacToe()" />

<script>

var stage = 1; 

function pesterButtonClick() {
	var btn = document.getElementById('btn1'); 

	switch(stage)
	{
		case 1:
			btn.value="hey"; 
			break; 
		case 2:
			btn.value="hello"; 
			btn.style.backgroundColor = "blue"; 
			break;
		case 3:
			btn.value="hi"; 
			btn.style.color = "white";
			break;
		case 4:
			btn.value="sup"; 
			break;
		default:
			break;
	}
	stage += 1
}