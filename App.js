$(document).ready(function(){
	// on click of button, if input has a value, button prints date else returns error message.
	$("button").on("click", function() {
		var d1 = $("#data1");
		var input = $("input");
		if(input.val() === "") {
	
		}
		else {
		d1.append("<p>" + input.val() + " " + new Date()+ "</p>");
        input.val("");
		}
	});

});