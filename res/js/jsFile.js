//adding task
$("#add_task").click(function () {
	if($("#new_task_field").val() != ""){
		var tsk = $("#new_task_field").val();
		$("#tsk_ul").append("<li> <span class='trash'> <i class='fa fa-trash'></i></span>"+ tsk +"</li>");
		$("#new_task_field").val("");
	}
	
})

$("#new_task_field").on("keypress", function (e) {
	
	if($("#new_task_field").val() != ""){
		if (e.which == 13) {
		var tsk = $("#new_task_field").val();
		$("#tsk_ul").append("<li> <span class='trash'> <i class='fa fa-trash'></i></span> "+ tsk +"</li>");
		$("#new_task_field").val("");
		}
	}
})

$("#tsk_ul").on("click", "span", function () {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();	
	})
	

})

// Completing out tasks
$("#tsk_ul").on("click", "li", function (argument) {
	$(this).toggleClass("done");
	

})

//hiding the add button
$("#new_task_field").focus(function(){
	
	$("#add_task").css("display","inline-block");
});

$("#new_task_field").focusout(function(){
	
	$("#add_task").fadeOut(function () {
		
		$(this).css("display","none");
	});
})