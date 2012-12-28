crateDigger.Views.wantlistView = Backbone.View.extend({
	el: $('#content'),
	initialize: function () {
		this.$el.empty();
		this.collection = new crateDigger.Collections.WantlistCollection([], { username : "aeyoll" });
		this.listenTo(this.collection, 'add', this.renderRelease);
		this.listenTo(this.collection, 'reset', this.renderWantlist);
		this.listenTo(this.collection, 'all', this.render);
		this.collection.fetch();
	},
	render: function () {

	},
	renderRelease: function (item) {
		var releaseView = new crateDigger.Views.releaseView({
			model: item
		});
		this.$('#content').append(releaseView.render().el);
	},
	renderWantlist: function() {
		this.collection.each(this.renderRelease);
	}
});
