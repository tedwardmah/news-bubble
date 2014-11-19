class ArticlesAPIController < ApplicationController


  def index

    response = HTTParty.get('http://api.usatoday.com/open/articles/topnews/sports?api_key=mnsmzv8pam9p2p2sswj4efs8')

    articles_array = response["rss"]["channel"]["item"]
    
 
  end


end