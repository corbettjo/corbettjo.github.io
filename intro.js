var body = $(".landingBackground");

var landWidth = $(".homenav").width() + 80;
var landHeight = $(".homenav").height() + 20;



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
