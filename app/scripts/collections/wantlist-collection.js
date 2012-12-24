crateDigger.Collections.WantlistCollection = Backbone.Collection.extend({
	model: crateDigger.Models.ReleaseModel,
	localStorage: new Backbone.LocalStorage("wantlist"),
	sync: function(method, model, options) {
		var params = _.extend({
			type: 'GET',
			dataType: 'jsonp',
			url: model.url(),
			processData: false
		}, options);
		return $.ajax(params);
	},
	url : function() {
		return "http://api.discogs.com/users/" + this.username + "/wants";
	},
	initialize: function (models, options) {
		this.username = options.username;
		this.deferred = this.fetch();
	},
	parse: function(data) {
		var releases = [];
		var results = data.data.wants;
		_.each(results, function(item) {
			releases.push(item.basic_information);
		});
		return releases;
	}
});
