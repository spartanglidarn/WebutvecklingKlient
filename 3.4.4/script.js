$(document).ready(function(){
	$(function () {
		$("#tabs").tabs();
	});

	
	var theImage = $('#sliderList li .sliderImg');
	var theWidth = theImage.width();

	$("#sliderList").wrap('<div id="mother" />');

	$("#mother").css({
		width: function() {
			return theWidth;
		},
		height: function() {
			return theImage.height();
		},	
		position: 'relative',
		overflow: 'hidden'
	});

	var totalWidth = theImage.length * theWidth;
	$("#sliderList").css({
		width: function(){
			return totalWidth;
		}
	});

	$(theImage).each(
		function(intIndex){
			$(this).nextAll("a")
				.bind("click", function(){
					if($(this).is(".next")) {
						$(this).parent("li").parent("ul").animate({
							"margin-left": (-(intIndex + 1) * theWidth)
						}, 1000)
					} else if ($(this).is(".previous")){
						$(this).parent("li").parent("ul").animate({
							"margin-left": (-(intIndex - 1) * theWidth)
						}, 1000)
					} 
				});
	});



});

	$("#tooltipP").tooltip();



