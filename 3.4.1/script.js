
$(document).ready(function(){
	$("#blueBoxOne").hide();
	$("#redBoxOne").hide();
	$("#yellowBoxOne").show();
	$("#greyBoxOne").show();

	$("#blueBoxButton").click(function(){
		$("#blueBoxOne").toggle();
	});
	$("#redBoxButton").click(function(){
		$("#redBoxOne").toggle();
	});
	$("#yellowBoxButton").click(function(){
		$("#yellowBoxOne").toggle();
	});
	$("#greyBoxButton").click(function(){
		$("#greyBoxOne").toggle();
	});

	$("#blueBoxTwo").hide();
	$("#blueBoxButtonTwo").click(function(){
		$("#blueBoxTwo").fadeIn(2000);
	});
	
	$("#redBoxButtonTwo").click(function(){
		$("#redBoxTwo").fadeOut(2000);
	});

	$("#yellowBoxButtonTwo").click(function(){
		$("#yellowBoxTwo").fadeToggle(1000);
	});

	$("#greyBoxButtonTwo").click(function(){
		$("#greyBoxTwo").fadeTo(500, 0.2);
	})

	$("#animateBoxButton").click(function(){
		$("#animateBox").animate({
			opacity: 0.3,
			left: "+=50",
			width: ["toggle", "swing"],
			height: ["toggle", "swing"]
		}, 4000,"linear", function(){
			var para = document.createElement("p");
			var textNode = document.createTextNode("Animation slutförd");
			para.appendChild(textNode);
			var compArea = document.getElementById("animationComplete");
			compArea.appendChild(para);
		});
	});
}); 