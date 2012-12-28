crateDigger.Views.searchView = Backbone.View.extend({
	el: $('#content'),
	initialize: function (data) {
		this.$el.empty();
		this.collection = new crateDigger.Collections.SearchCollection([], { query : data.query });
		this.listenTo(this.collection, 'add', this.renderRelease);
		this.listenTo(this.collection, 'reset', this.renderSearch);
		this.listenTo(this.collection, 'all', this.render);
		this.collection.fetch();
	},
	render: function () {
	},
	renderRelease: function (item) {
		var releaseView = new crateDigger.Views.releaseView({
			model: item
		});
		$('#content').append(releaseView.render().el);
	},
	renderSearch: function() {
		this.collection.each(this.renderRelease);
	}
});
