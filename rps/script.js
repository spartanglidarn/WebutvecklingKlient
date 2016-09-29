var playerNr = 0;
var opponentNr = 0;
var playerResults = [];
var opponentResults = [];

function opponentFunction() {
	var randomNumber = Math.random();
	var opponent = "error.png";


	if (randomNumber < 0.33) {
		opponent = "rock.png";
		opponentNr = 1;
	} else if (randomNumber < 0.66) {
		opponent = "paper.png";
		opponentNr = 2;
	} else {
		opponent = "scissor.png";
		opponentNr = 3;
	}
	document.getElementById('opponentResult').src = opponent;
}


function rockFunction(){
	document.getElementById('gameResult').src= "rock.png";
	playerNr = 1;
	opponentFunction();
	addResult();
}

function paperFunction(){
	document.getElementById('gameResult').src= "paper.png";
	playerNr = 2;
	opponentFunction();

}

function scissorFunction(){
	document.getElementById('gameResult').src= "scissor.png";
	playerNr = 3;
	opponentFunction();
	addResult();
}

function addPlayerResult() {
	playerResults.push(playerNr);
}

function addOpponentResult() {
	opponentResults.push(opponentNr);
}

function addResult() {
	addPlayerResult();
	addOpponentResult();
}

