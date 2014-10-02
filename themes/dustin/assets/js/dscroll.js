jQuery.fn.dscroll = function(settings) {

 	settings = jQuery.extend({
		speed : 1000,
		offset : -70
	}, settings);	
	
	return this.each(function(){
		var c = this;
		$(c).click(function (event) {	
			event.preventDefault();

			var click = $(c).attr("href");
			var destination = $(click).offset().top + settings.offset;
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				if (history.pushState) {
					history.pushState(null, null, click);
				} else {
					window.location.hash = click;
				}		
				$(".nav a").removeClass('nav_on');
				$(".nav a[href='"+click+"']").addClass('nav_on');
			});
		  	return false;
		});
	});
};