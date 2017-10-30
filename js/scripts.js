$(document).ready(function() {

	// Bootstrap modal
	$('.launch-modal').on('click', function(e){
	    e.preventDefault();
	    $( '#' + $(this).data('modal-id') ).modal();
	});

	// Bootstrap popup
	$('[data-toggle="tooltip"]').tooltip();
});