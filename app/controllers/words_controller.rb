class WordsController < ApplicationController

  def index

    @words = Word.sort_by_total_count(40)
    # file = File.read('app/assets/javascripts/flare.json')
    # file = File.read('app/assets/resources/flare.json')
    # thing = JSON.parse(file)
    # puts thing
  #   respond_to do |format|
  #     format.html
  #     format.json { render :json => { words: @words }}
  
  	end

  def show
  	word = Word.find(params[:id])
  	@articles = word.articles

  end

end