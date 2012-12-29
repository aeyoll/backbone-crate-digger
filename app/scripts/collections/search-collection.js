crateDigger.Collections.SearchCollection = Backbone.Collection.extend({
	model: crateDigger.Models.ReleaseModel,
	localStorage: new Backbone.LocalStorage('search'),
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
			title = item.title.split('-');
			artist = [];
			artist['name'] = crateDigger.utils.trim(title[0]);
			format = [];
			format['descriptions'] = item.format;
			release = new crateDigger.Models.ReleaseModel({
				id: item.id,
				artists: [artist],
				formats: [format],
				thumb: item.thumb,
				title: [crateDigger.utils.trim(title[1])],
				year: item.year
			});
			releases.push(release);
			that.add(release);
			release.save();
		});

		return releases;
	}
});
