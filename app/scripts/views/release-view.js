crateDigger.Views.releaseView = Backbone.View.extend({
	tagName: "article",
    className: "release-container media",
    template: $("#releaseTemplate").html(),
    attributes: {'itemscope': '', 'itemtype': 'http://schema.org/MusicGroup'},
    render: function () {
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});
