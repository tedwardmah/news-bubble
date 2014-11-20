class WordsController < ApplicationController

  def index
    @word = Word.all
  end


end