$(document).ready(function(){
	var rps = ["rock.png", "paper.png", "scissor.png"]
	var count = 0
	$("#picButton").click(function() {
		$("#jqueryPic").attr("src", rps[count]);
		count += 1;
		if (count >= 3){
			count = 0;
		}
	});

	if (document.images) {
		img1 = new Image();
		img2 = new Image();
		img3 = new Image();
		img4 = new Image();
		img5 = new Image();

		img1.src = "img1.png";
		img2.src = "img2.png";
		img3.src = "rock.png";
		img4.src = "paper.png";
		img5.src = "scissor.png";

	}

	var canvasOne = document.getElementById("testCanvas");
	var canvasOneContext = canvasOne.getContext("2d");
	canvasOneContext.moveTo(0,0);
	canvasOneContext.lineTo(300,200);
	canvasOneContext.stroke();

	canvasOneContext.beginPath();
	canvasOneContext.arc(200,50,30,0,2*Math.PI);
	canvasOneContext.stroke();

	var canvasTwo = document.getElementById("testCanvasTwo");
	var canvasTwoContext = canvasTwo.getContext("2d");

	canvasTwoContext.beginPath();
	canvasTwoContext.moveTo(60,70);
	canvasTwoContext.bezierCurveTo(60,150,240,150,240,70);
	canvasTwoContext.stroke();

	canvasTwoContext.beginPath();
	canvasTwoContext.arc(104,35,15,0,2*Math.PI);
	canvasTwoContext.stroke();

	canvasTwoContext.beginPath();
	canvasTwoContext.arc(200,35,15,0,2*Math.PI);
	canvasTwoContext.stroke();

	canvasTwoContext.beginPath();
	canvasTwoContext.moveTo(152,70);
	canvasTwoContext.bezierCurveTo(140,90,120,90,152,90);
	canvasTwoContext.stroke();

	var dag = new Date();
	var idag = dag.getDay();
	canvasTwoContext.font = "12px Helvetica";
	canvasTwoContext.fillText("Made by: Erik Boström", 3, 150);

	canvasTwoContext.shadowBlur= 20;
	canvasTwoContext.shadowColor = "black";
	canvasTwoContext.fillStyle="yellow";
	canvasTwoContext.fillRect(240,120,20,20);

	var canvasThree = document.getElementById("testCanvasThree");
	var canvasThreeContext = canvasThree.getContext("2d");
	var theImage = document.getElementById("theImg");
	canvasThreeContext.drawImage(theImage, 20, 20, 150, 180);

	function download() {
		var dataUrl = canvasThree.toDataURL('image/jpeg');
		this.href = dataUrl;
	};
	downloadLnk.addEventListener('click', download, false);

});

