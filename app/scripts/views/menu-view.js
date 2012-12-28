crateDigger.Views.menuView = Backbone.View.extend({
	el: $('#menu'),
	template: $('#menuTemplate').html(),
	initialize: function(a) {
		this.header = a.header;

		var that = this;
		$(this.el).swipeLeft(function () {
			that.header.toggleViewport();
		});
	},
	events: {
		'click a': 'toggleViewport',
		'keypress input': 'submit'
	},
	render: function() {
		var tmpl = _.template(this.template);
		this.$el.html(tmpl);
		return this;
	},
	submit: function (a) {
		if (a.which === 13) {
			a.preventDefault();
			router.navigate('#/search/' + $(a.target).val(), !0);
			$(a.target).blur();
			$(a.target).val(null);
			this.toggleViewport();
		}
	},
	toggleViewport: function () {
		this.header.toggleViewport();
	}
});
