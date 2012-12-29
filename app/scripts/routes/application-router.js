crateDigger.Routers.ApplicationRouter = Backbone.Router.extend({
	views: {},
	routes: {
		'': 'index',
		'collection': 'collection',
		'search/:query': 'search',
		'wantlist': 'wantlist'
	},
	index: function() {
		$('#loading').hide();
	},
	collection: function() {
		var collection = new crateDigger.Views.collectionView();
		collection.render();
	},
	search: function(query) {
		var search = new crateDigger.Views.searchView({query: query});
		search.render();
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
