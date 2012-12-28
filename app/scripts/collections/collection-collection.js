crateDigger.Collections.CollectionCollection = Backbone.Collection.extend({
	model: crateDigger.Models.ReleaseModel,
	localStorage: new Backbone.LocalStorage('collection'),
	sync: function(method, model, options) {
		var params = _.extend({
			type: 'GET',
			dataType: 'jsonp',
			url: model.url(),
			processData: false,
			beforeSend: function () {
				$('#loading').show();
			},
			complete: function () {
				$('#loading').hide();
			}
		}, options);
		return $.ajax(params);
	},
	url : function() {
		return 'http://api.discogs.com/users/' + this.username + '/collection/folders/0/releases';
	},
	initialize: function (models, options) {
		this.username = options.username;
	},
	parse: function(data) {
		var releases = this.models;
		var results = data.data.releases;
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
