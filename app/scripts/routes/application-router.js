crateDigger.Routers.ApplicationRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'collection': 'collection',
		'wantlist': 'wantlist'
	},
	index: function() {
	},
	collection: function() {
		var collection = new crateDigger.Views.collectionView();
		collection.render();
	},
	wantlist: function() {
		var wantlist = new crateDigger.Views.wantlistView();
		wantlist.render();
	}
});
