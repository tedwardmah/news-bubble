var ArticleListView = function ArticleListView(options){
  options = options || {};
  this.collection = options.collection;
  this.$el = options.$el;
  this.modelView = options.modelView;
  $(this.collection).on('change', $.proxy(this.render, this));
}

ArticleListView.prototype.render = function render(){
  this.$el.empty();
  var models = this.collection.models;
  for (var i = 0; i < models.length; i++){
    var model = models[i];
    var view = new this.modelView({model: model });
    this.$el.append(view.render().$el);
  }
  $(".lead").hide();
  $('.headline').on('click', function(){
    var $thisLead = $(this.nextElementSibling);
    $thisLead.slideToggle();
    if ($lastClickedLead) {
      $lastClickedLead.slideToggle(function(){
        $lastClickedLead = $thisLead;
      });
    }
  })
  return this;
}