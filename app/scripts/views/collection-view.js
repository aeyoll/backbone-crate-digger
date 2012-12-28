crateDigger.Views.collectionView = Backbone.View.extend({
	el: $('#content'),
	initialize: function () {
		this.$el.empty();
		this.collection = new crateDigger.Collections.CollectionCollection([], { username : "aeyoll" });
		this.listenTo(this.collection, 'add', this.renderRelease);
		this.listenTo(this.collection, 'reset', this.renderCollection);
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
	renderCollection: function() {
		this.collection.each(this.renderRelease);
	}
});
