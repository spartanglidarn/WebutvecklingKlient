var playerOne = "rock";
var playerTwo = "rock";

$(document).ready(function(){
	$("#rock").click(function(){
		playerOne = "rock";
	});
	$("#paper").click(function(){
		playerOne = "paper";
	});
	$("#scissor").click(function(){
		playerOne = "scissor";
	});	

	$(".wepon").click(function(){
		if (playerOne == "rock") {
			rockFunction(playerTwo);

		} else if (playerOne == "paper") {
			paperFunction(playerTwo);

		} else if (playerOne == "scissor"){
			scissorFunction(playerTwo);
		} else {
			result = "No wepon chosen by player one";
		};
		
		console.log(result);
		});

});

var rockFunction = function rock (opponent) {
		if (opponent == "rock"){
			result = "Draw";
		} else if (opponent == "paper") {
			result = "Lose";
		} else if (opponent == "scissor"){
			result = "Win";
		};
		return result;
	};

	var paperFunction = function paper (opponent) {
		if (opponent == "rock"){
			result = "Win";
		} else if (opponent == "paper") {
			result = "Draw";
		} else if (opponent == "scissor"){
			result = "Lose";
		};
		return result;
	};

	var scissorFunction = function scissor (opponent) {
		if (opponent == "rock"){
			result = "Lose";
		} else if (opponent == "paper") {
			result = "Win";
		} else if (opponent == "scissor"){
			result = "Draw";
		};
		return result;
	};



