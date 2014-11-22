var ArticleListView = function ArticleListView(options){
  options = options || {};
  this.collection = options.collection;
  this.$el = options.$el;
  this.modelView = options.modelView;
  $(this.collection).on('change', $.proxy(this.render, this));
}

ArticleListView.prototype.render = function render(){
  this.$el.empty();
  debugger
  var models = this.collection.models;
  for (var i = 0; i < models.length; i++){
    var model = models[i];
    var view = new this.modelView({model: article });
    this.$el.append(view.render().$el);
  }
  return this;
}