crateDigger.Routers.ApplicationRouter = Backbone.Router.extend({
	views: {},
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
	},
	initialize: function() {
		this.views.header = new crateDigger.Views.headerView();
		this.views.menu = new crateDigger.Views.menuView({
			header: this.views.header
		});
		this.views.header.render();
		this.views.menu.render();
	}
});
