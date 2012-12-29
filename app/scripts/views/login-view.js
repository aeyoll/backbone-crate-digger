crateDigger.Views.loginView = Backbone.View.extend({
	el: $('#content'),
	template: $('#loginTemplate').html(),
	events: {
		'click #submitLogin': 'login',
		'keypress #username': 'loginOnEnter'
	},
	render: function() {
		var tmpl = _.template(this.template);
		this.$el.html(tmpl);
		return this;
	},
	login: function(e) {
		if (e) {
			e.preventDefault();
			var username = $('#username');
			if (username.val().length) {
				crateDigger.session.set({
					username: username.val()
				});
				location.reload();
			}
		}
	},
    loginOnEnter: function(e) {
		if (e.keyCode != 13) return;
		if (!this.input.val()) return;

		var username = $('#username');
		if (username.val().length) {
			crateDigger.session.set({
				username: username.val()
			});
			router.navigate('/');
		}
	}
});
