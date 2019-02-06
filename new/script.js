(function ($) {
	var $window = $(window), $body = $('body'), $header = $('#header'), $banner = $('#banner'),
		settings = { carousel: { speed: 350 } };
	$.fn._carousel = function (options) {
		var $window = $(window), $this = $(this);
		if (this.length == 0) return $this;
		if (this.length > 1) {
			for (var i = 0; i < this.length; i++) $(this[i])._slider(options);
			return $this;
		}
		var current = 0, pos = 0, lastPos = 0, slides = [], $slides = $this.children('article'), intervalId,
			isLocked = false, i = 0;
		$this._switchTo = function (x, stop) {
			if (isLocked || pos == x) return;
			isLocked = true;
			if (stop) window.clearInterval(intervalId);
			lastPos = pos;
			pos = x;
			slides[lastPos].removeClass('visible');
			window.setTimeout(function () {
				slides[lastPos].hide();
				slides[pos].show();
				window.setTimeout(function () {slides[pos].addClass('visible');}, 25);
				window.setTimeout(function () {isLocked = false;}, options.speed);
			}, options.speed);
		};
		$slides.each(function () {
			var $slide = $(this);
			slides.push($slide);
			$slide.hide();
			i++;
		});
		$this.on('click', '.next', function (event) {
			event.preventDefault();
			event.stopPropagation();
			current++;
			if (current >= slides.length) current = 0;
			$this._switchTo(current);
		}).on('click', '.previous', function (event) {
			event.preventDefault();
			event.stopPropagation();
			current--;
			if (current < 0) current = slides.length - 1;
			$this._switchTo(current);
		});
		slides[pos].show().addClass('visible');
		if (slides.length == 1) return;
	};
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px'],
	});
	$window.on('load', function () {window.setTimeout(function () {$body.removeClass('is-preload');}, 100);});
	$('#menu').append('<a href="#menu" class="close"></a>').appendTo($body).panel({
		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'right',
	});
	if ($banner.length > 0 && $header.hasClass('alt')) {
		$window.on('resize', function () { $window.trigger('scroll'); });
		$banner.scrollex({
			bottom: $header.outerHeight(),
			terminate: function () { $header.removeClass('alt'); },
			enter: function () { $header.addClass('alt'); },
			leave: function () { $header.removeClass('alt'); },
		});
	}
	$('.image[data-position]').each(function () {
		var $this = $(this), $img = $this.children('img');
		if (!browser.canUse('object-fit')) {
			$this.css('background-image', 'url("' + $img.attr('src') + '")').css('background-position', $this.data('position')).css('background-size', 'cover').css('background-repeat', 'no-repeat');
			$img.css('opacity', '0');
			return;
		}
	});
	$('.scrolly').scrolly({ offset: function () {return $header.outerHeight() - 2;} });
	$('.scrolly-middle').scrolly({ anchor: 'middle', offset: function () {return $header.outerHeight() - 2;} });
	$('.spotlight').scrollex({
		top: '30vh',
		bottom: '30vh',
		delay: 25,
		initialize: function () {$(this).addClass('is-inactive');},
		terminate: function () {$(this).removeClass('is-inactive');},
		enter: function () {$(this).removeClass('is-inactive');},
	});
	$('.carousel')._carousel(settings.carousel);
})(jQuery);