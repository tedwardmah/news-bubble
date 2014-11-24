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

ArticleList.prototype.fetch = function fetch(wordId){
  var word_id = wordId;
  var url = ('/words/' + word_id);
  var that = this;
  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    success: function(data){
      that.models = [];
      $(data.articles).each(function(index, articleOptions) {
        var article = new that.model(articleOptions);
        that.add(article);
      })
    }
  })
}