// check off the specific todo
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

// Click on X to delete the todo

$('ul').on('click', 'span', function() {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// for entering a new todo

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		let todoText = $(this).val();

		//creating a new li
		$('ul').append('<li> <span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
	}
});

//fading input file in and out

$('.fa-plus').click(function() {
	$('input[type="text"]').fadeToggle();
});
