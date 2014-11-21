class WordsController < ApplicationController

  def index
    @word = Word.all
    file = File.read('app/assets/javascripts/flare.json')
    # file = File.read('app/assets/resources/flare.json')
    # thing = JSON.parse(file)
    # puts thing
    respond_to do |format|
      format.html
      format.json { render :json => { words: @words }}
    end
  end

end