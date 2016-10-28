// click "Run" to replay

var $body = $(".landing");

var loading = [
	{
		elements: $body,
		properties: {
			height: '0%',
			width: '0%'
		}
	},
	{
		elements: $body,
		properties: {
			width: '0%'
		}
	},
	{
		elements: $body,
		properties: {
			height: '50%',
			width: '30%'
		},
		options: {
			complete: function () {
				$('.wrap').velocity('transition.slideUpIn');
				$('img').velocity('transition.flipYIn');
			}
		}
  }
];

$.Velocity.RunSequence(loading);
