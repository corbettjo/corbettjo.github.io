function shift() {
	$('#me').velocity({
		left: '50%'
	}, '300ms');
	$('#me').css({
		"cursor": "url('x.png'), default"
	});

}


function shiftBack() {

	$('#me').velocity({
		left: '0%'
	}, '300ms');
	$('#me').css({
		"cursor": "default"
	});
}
