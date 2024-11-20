// ex 2


// ex 1
$(document).ready(function(){

	$('.toggle').on('click', function(){
		$('.info').slideToggle();
	});
	$('#draggable').draggable();
	$( "#accordion" ).accordion();

	var data = [
		"Html",
		"Css",
		"Bootstrap",
		"JavaScript"
		]

	$('#em1').autocomplete({
		source: data
	});

	$('#datepicker').datepicker();

});