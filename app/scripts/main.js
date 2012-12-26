
window.crateDigger = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function() {
		console.log('Hello from Backbone!');
	}
};

$(document).ready(function(){
	crateDigger.init();
	
	router = new crateDigger.Routers.ApplicationRouter();
	Backbone.history.start();
});
