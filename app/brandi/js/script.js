$(document).ready(function(){
	$(function(){
		//$(".menu").css("display","none");
		$("#toggle").on("click", function() {
			$(".menu").slideToggle();
		});
	});

	$(function(){
		//$(".menu").css("display","none");
		$("#toggle2").on("click", function() {
			$("#sub-nav").slideToggle();
		});
	});
});