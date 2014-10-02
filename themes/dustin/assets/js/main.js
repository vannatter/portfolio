var to_top = false;
var offset = 70;

$(document).ready(function() {

	$("a.dscroll").dscroll();
	
	$(".to_top").click(function(e) {
		to_top = true;
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow", function() {
			if (history.pushState) {
				history.pushState(null, null, '#');
			} else {
				window.location.hash = '';
			}
			to_top = false;
		});
		return false;
	});

	$('.nav a').on('click', function(){
		if ($('.navbar-toggle').is(':visible')) {
			$(".btn-navbar").click();
			$(".navbar-toggle").click();
		}
	});

	$(document).bind('scroll',function(e){
		$('.subsection').each(function(){
			if (!to_top) {
				if ($(this).offset().top < window.pageYOffset + offset && $(this).offset().top + $(this).height() > window.pageYOffset + offset) {
					e.preventDefault();
					if (history.pushState) {
						history.pushState(null, null, '#'+$(this).attr('id'));
					} else {
						window.location.hash = $(this).attr('id');
					}
					$(".nav a").removeClass('nav_on');
					$(".nav a[href='#"+$(this).attr('id')+"']").addClass('nav_on');
				}
			}
		});
	});

});