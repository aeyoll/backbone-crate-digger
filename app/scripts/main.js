
$(document).ready(function(){
	crateDigger.init();
	crateDigger.utils.loading();
	crateDigger.utils.touch();
	crateDigger.session = new crateDigger.utils.session('CrateDigger-Session');
	
	router = new crateDigger.Routers.ApplicationRouter();
	Backbone.history.start();
});
