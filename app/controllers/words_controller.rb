class WordsController < ApplicationController

  def index
    @words = Word.sort_by_total_count(40)

    # file = File.read('app/assets/resources/flare.json')
    # thing = JSON.parse(file)
    # puts thing
<<<<<<< HEAD
  end

  def show
  	word = Word.find(params[:id])
  	@articles = word.articles
=======

    
>>>>>>> 8bf27849cc46cecdfdb74263c0b278f995f34691
  end

end