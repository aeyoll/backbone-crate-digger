
window.crateDigger = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	utils : {
		vendor: function (a, f) {
			for (var d = {}, c = ["-webkit-", "-moz-", "-ms-", "-o-"], h = 0; h < c.length; h++) d[c[h] + a] = f;
			d[a] = f;
			return d;
		},
		loading: function() {
			(new Spinner()).spin(document.getElementById('loading'));
			$('#loading').show();
			$(document).on('ajaxComplete', function () {
				$('#loading').hide();
			});
			$(document).on('ajaxStart', function () {
				$('#loading').show();
			});
			$(document).on('ajaxError', function () {
				$('#loading').hide();
			});
		},
		session: function (a) {
			crateDigger.utils.session.prototype.set = function (f) {
				var d = JSON.parse(localStorage.getItem(a)) || {};
				f = _.extend(d, f);
				localStorage.setItem(a, JSON.stringify(f));
			};
			crateDigger.utils.session.prototype.get = function (f) {
				return (JSON.parse(localStorage.getItem(a)) || {})[f];
			};
			crateDigger.utils.session.prototype.destroy = function () {
				localStorage.setItem(a, null);
			};
		},
		touch: function() {
			$('a').on('touchstart', function () {
				if (!$(this).hasClass('pressed')) {
					$(this).addClass('pressed');
				}
			});
			$('a').on('touchend', function () {
				if ($(this).hasClass('pressed')) {
					$(this).removeClass('pressed');
				}
			});
		},
		trim: function(string) {
			return string.replace(/^\s+/g,'').replace(/\s+$/g,'');
		}
	},
	init: function() {
		console.log('Hello from Backbone!');
	}
};
