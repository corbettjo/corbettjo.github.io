var body = $(".landingBackground");

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
			width: '300px'
		}
	},
	{
		elements: body,
		properties: {
			height: '45%'
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
