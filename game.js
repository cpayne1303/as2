var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop + 1;
var maybeCactus=document.elementFromPoint(positionLeft, newTop+46);
		if(!maybeCactus.classList.contains("cactus"))
		{
		player.style.top = newTop + 'px';
		}
		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop - 1;
var maybeCactus=document.elementFromPoint(positionLeft, newTop);
		if(!maybeCactus.classList.contains("cactus"))
		{
		player.style.top = newTop + 'px';
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft - 1;
var maybeCactus=document.elementFromPoint(newLeft, positionTop);
		if(!maybeCactus.classList.contains("cactus"))
{
		player.style.left = newLeft + 'px';
}

		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft + 1;
var maybeCactus=document.elementFromPoint(newLeft+32, positionTop);
		if(!maybeCactus.classList.contains("cactus"))
{
		player.style.left = newLeft + 'px';
}

		player.className = 'character walk right';
	}

}


function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}


function myLoadFunction() {
	var startDiv=document.querySelector('.start');
startDiv.style.display='none';
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
}
function startGame()
{
	var startDiv=document.querySelector('.start');
	startDiv.addEventListener('click', myLoadFunction);
}

document.addEventListener('DOMContentLoaded', startGame);