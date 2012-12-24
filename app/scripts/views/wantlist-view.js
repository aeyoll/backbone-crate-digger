crateDigger.Views.wantlistView = Backbone.View.extend({
	el: $("#wantlist"),
	initialize: function () {
		var that = this;

		this.collection = new crateDigger.Collections.WantlistCollection([], { username : "aeyoll" });
		this.collection.deferred.done(function() {
			that.render();
		});
	},
	render: function () {
		var that = this;
		_.each(this.collection.models, function (item) {
			that.renderRelease(item);
		}, this);
	},
	renderRelease: function (item) {
		var releaseView = new crateDigger.Views.releaseView({
			model: item
		});
		this.$el.append(releaseView.render().el);
	}
});
