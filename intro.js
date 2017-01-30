if (screen.width > 480) {

	var body = $(".landingBackground");
	var landWidth = $(".landingBackground").width() + 80;
	var landHeight = $(".landingBackground").height() + 20;

	var loading = [
		{
			elements: body,
			properties: {
				height: '10%'
			}
		},
		{
			elements: body,
			properties: {
				hight: '10%',
				width: landWidth
			}
		},
		{
			elements: body,
			properties: {
				height: '50%'
			},
			options: {
				complete: function () {
					{
						$(".landing").fadeIn();
					}
				}
			}
		}
	];


	$(".landing").hide();
	$.Velocity.RunSequence(loading);

} else {
	$(".landingBackground").width(400);
	$(".landingBackground").height(350);
}
