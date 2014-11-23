class ArticlesController < ApplicationController

  def index

    @articles = Article.all
    session[:words] = Word.sort_by_total_count(20)
    @words = session[:words]
    
    
  end


end