$(document).ready(function(){
	$("a[href^='http']").attr("target","_blank");
	
	$("#nav li").hover (
		function () {
			$("ul", this).stop().slideDown(150);
		},
		function () {
			$("ul", this).stop().slideUp(150);
		});

});