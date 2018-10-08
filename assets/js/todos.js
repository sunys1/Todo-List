//Check Off Specific Todos By Clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(){
	if(event.which === 13){
		//get input text value
		var todo = $(this).val();
		//create a new li with the new value in ul
		$("ul").append("<li>" + todo + "</li>");
	}
})