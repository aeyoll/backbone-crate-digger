crateDigger.Views.releaseView = Backbone.View.extend({
	tagName: "article",
    className: "release-container",
    template: $("#releaseTemplate").html(),
    render: function () {
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});
