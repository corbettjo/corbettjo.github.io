function withVelocity() {
	$("#with-velocity").velocity({
		left: "500px",
		right: "500px",
	}, {
		duration: 300,
		easing: "easeInQuad"
	});
}

$("#play-velocity").on('click', function () {
	withVelocity();
});
