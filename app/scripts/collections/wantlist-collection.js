crateDigger.Collections.WantlistCollection = Backbone.Collection.extend({
	model: crateDigger.Models.ReleaseModel,
	localStorage: new Backbone.LocalStorage('wantlist'),
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
		return 'http://api.discogs.com/users/' + this.username + '/wants';
	},
	initialize: function (models, options) {
		this.username = options.username;
	},
	parse: function(data) {
		var releases = this.models;
		var results = data.data.wants;
		var that = this;

		_.each(results, function(item) {
			infos = item.basic_information;
			release = new crateDigger.Models.ReleaseModel({
				id: infos.id,
				artists: infos.artists,
				formats: infos.formats,
				thumb: infos.thumb,
				title: infos.title,
				year: infos.year
			});
			releases.push(release);
			that.add(release);
			release.save();
		});
		return releases;
	}
});
