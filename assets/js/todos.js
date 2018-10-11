//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(){
	if(event.which === 13){
		//get input text value
		var todo = $(this).val();
		$(this).val("");
		//create a new li with the new value in ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todo + "</li>");
	}
})