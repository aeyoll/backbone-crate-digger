crateDigger.Collections.SearchCollection = Backbone.Collection.extend({
	model: crateDigger.Models.ReleaseModel,
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
		return 'http://api.discogs.com/database/search?type=release&q=' + this.query + '&per_page=' + this.per_page ;
	},
	initialize: function (models, options) {
		this.query = _.escape(options.query);
		this.per_page = 5;
	},
	parse: function(data) {
		var releases = this.models;
		var results = data.data.results;
		var that = this;

		_.each(results, function(item) {
			release = new crateDigger.Models.ReleaseModel({
				id: item.id,
				artists: item.artists,
				formats: item.formats,
				thumb: item.thumb,
				title: item.title,
				year: item.year
			});
			releases.push(release);
			that.add(release);
		});

		return releases;
	}
});
