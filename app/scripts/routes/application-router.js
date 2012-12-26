crateDigger.Routers.ApplicationRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'wantlist': 'wantlist'
	},
	index: function() {
	},
	wantlist: function() {
		var wantlist = new crateDigger.Views.wantlistView();
		wantlist.render();
	}
});
