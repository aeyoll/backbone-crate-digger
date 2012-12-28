crateDigger.Views.collectionView = Backbone.View.extend({
	el: $('#content'),
	initialize: function () {
		var that = this;

		this.collection = new crateDigger.Collections.CollectionCollection([], { username : "aeyoll" });
		this.listenTo(this.collection, 'add', this.renderRelease);
		this.listenTo(this.collection, 'reset', this.renderCollection);
		this.listenTo(this.collection, 'all', this.render);
		this.collection.fetch();

		// this.render();
		// this.collection.deferred.done(function() {
		// 	that.render();
		// });
	},
	render: function () {
		// var that = this;
		// this.$el.empty();
		// console.log(this.collection.localStorage.findAll());

		// _.each(this.collection.models, function (item) {
		// 	that.renderRelease(item);
		// }, this);
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
