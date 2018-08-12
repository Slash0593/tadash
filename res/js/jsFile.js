//adding task
$("#add_task").on("click",function () {
	if($("#new_task_field").val() != ""){
		var tsk = $("#new_task_field").val();
		$("#tsk_ul").append("<li> <span class='trash'> <i class='fa fa-trash'> </i></span> <span class='task_setting'> <i class='fa fa-cog'></i></span> "+ tsk +"</li>");
		$("#new_task_field").val("");
	}
	
});

$("#new_task_field").on("keypress", function (e) {
	
	if($("#new_task_field").val() != ""){
		if (e.which === 13) {
		var tsk = $("#new_task_field").val();
		$("#new_task_field").val("");
		$("#tsk_ul").append("<li> <span class='trash'> <i class='fa fa-trash'> </i></span> <span class='task_setting'> <i class='fa fa-cog'></i></span> "+ tsk +"</li>");
		}
	}
});

//REMOVE A TASK
$("#tsk_ul").on("click", ".trash", function (e) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();	
	})
	e.stopPropagation();

})

// COMPLETING A TASK
$("#tsk_ul").on("click", "li", function (e) {
	$(this).toggleClass("done");
	e.stopPropagation();
	console.log(this);

})

//HIDING THE ADD BUTTON
$("#new_task_field").focus(function(){
	
	$("#add_task").css("display","block");
});

$("#new_task_field").focusout(function(){
	
	$("#add_task").fadeOut(function () {
		
		$(this).css("display","none");
	});
});

$('#myModal').on('hidden.bs.modal', function (e) {
  // do something...
})

//TASK SETTING MODAL
$("#tsk_ul").on("click", ".task_setting", function(e){

		$('#my_modal').modal('show');
		e.stopPropagation();
});