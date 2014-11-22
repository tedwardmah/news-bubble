var ArticleList = function ArticleList(options){
  options = options || {};
  this.models = [];
  this.model = options.model
}

ArticleList.prototype.add = function add(model){
  this.models.push(model);
  $(this).trigger('change');
  return this;
}