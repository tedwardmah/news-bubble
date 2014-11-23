class WordsController < ApplicationController

  def index
    @articles = Article.all
    session[:words] = Word.sort_by_total_count(20)
    @words = session[:words]
  end

  def show
  	@word = Word.find(params[:id])
  	@articles = @word.articles

    respond_to do |format|
      format.html
      format.json { render :json => { articles: @articles }}
    end
  end

end