crateDigger.Views.headerView = Backbone.View.extend({
	el: $('#header'),
	template: $('#headerTemplate').html(),
	initialize: function () {
		_.bindAll(this, 'toggleViewport');
	},
	events: {
		'click header .button': 'toggleViewport'
	},
	render: function() {
		var tmpl = _.template(this.template);
		this.$el.html(tmpl);
		return this;
	},
	toggleViewport: function (a) {
		if (a) a.preventDefault();
		if (this.panel) {
			$('#' + this.panel).css(crateDigger.utils.vendor('transform', 'translate3d(0, 0, 0)'));
			$('#main').css(crateDigger.utils.vendor('transform', 'translate3d(0, 0, 0)'));
			this.panel = null;
			this.overlay.remove();
			this.overlay = null;
		}
		else if (a) {
			if (!this.overlay) {
				this.overlay = $('<div id="overlay"></div>');
				this.overlay.css({
					position: 'absolute',
					width: '100%',
					height: '100%',
					zIndex: 10
				});
				var that = this;
				this.overlay.click(function () {
					that.overlay.remove();
					that.toggleViewport();
				});
			}
            $('#main').prepend(this.overlay);

			if ($(a.target).hasClass('menu')) {
				$('#menu').css(crateDigger.utils.vendor('transform', 'translate3d(260px, 0, 0)'));
				$('#main').css(crateDigger.utils.vendor('transform', 'translate3d(260px, 0, 0)'));
				this.panel = 'menu';
			}
		}
	}
});
