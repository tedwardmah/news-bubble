class WordsController < ApplicationController

  def index
    @word = Word.all
    # file = File.read('app/assets/resources/flare.json')
    # thing = JSON.parse(file)
    # puts thing
  end

  def show

  end



end