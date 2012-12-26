crateDigger.Models.ReleaseModel = Backbone.Model.extend({
	defaults : {
		'id': '',
		'artists': '',
		'formats': '',
		'thumb': '',
		'title': '',
		'year': ''
	},
	url : function() {
		return 'http://api.discogs.com/releases/' + this.id;
	}
});
