var ArticleView = function ArticleView(options){
  options = options || {};
  this.model = options.model
}

ArticleView.prototype.render = function render(){
  var templateText = $('article-template').html();
  var compiled     = _.template(templateText);
  this.$el = $(compiled({ article: this.model }));
  return this;
}