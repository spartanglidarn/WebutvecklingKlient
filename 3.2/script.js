$(document).ready(function(){
	$("#box1Button").click(function(){
		$("p:first").toggle(300);
	});	

	$("p").each(function(i){
		$(this).on("click", {x:i}, function(event){
			alert("Paragrafens index är: " + $(this).index() + ". Paragrafen har data: " + event.data.x);
		});
	});

	$("#box1Text").hide();

	$("#box1").hover(function(){
		$(this).fadeOut(200);
		$(this).fadeIn(200);
	});

	$("#box1").mouseenter(function(){
		$("#box1Text").show(300);
	});
	$("#box1").mouseleave(function(){
		$("#box1Text").hide(300);
	});

	$("#box1").dblclick(function(){
		$("#box1").animate({
			width: '300px',
			height: '300px'
		});
	});

	$("#box2Button").click(function(){
		$("#box2").animate({
			left: '300px',
			width: '300px'
		});
	});
	$("#pColor").click(function(){
		$("p").css("color", "red");
	});

	$("#inputTextButton").click(function(){
		$("#showInputText").text(function(){
			return $("#inputText").val();
		});
	});

	$("#inputListButton").click(function(){
		$("#appendList").append("<li>one item</li>");
	});
	$("#outputListButton").click(function(){
		$("#appendList li:last").remove();
	});

	$("#addClass").click(function(){
		$("#klassParagraf").addClass("blueClass borderClass");
	});
	$("#removeClass").click(function(){
		$("#klassParagraf").removeClass("blueClass borderClass");
	});

	$(window).resize(function(){
		$("#mainArea").append("<p>Du har ändrat storlek på fönstret</p>");
	});

	$("#formForm").submit(function(event){
		alert("Submitknappen har klickats på!!");
	});

	$("#box3Input").keypress(function(){
		$("#box3").animate({
			width: '300px',
			height: '300px'
		});
	});

	$("#preventLink").click(function(event){
		event.preventDefault();
	});

	$("#paragrafOff").off("click");
	
});
