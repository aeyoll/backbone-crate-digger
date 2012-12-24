
window.crateDigger = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {
		console.log('Hello from Backbone!');
		var wantlist = new crateDigger.Views.wantlistView();
	}
};

$(document).ready(function(){
	crateDigger.init();
});
