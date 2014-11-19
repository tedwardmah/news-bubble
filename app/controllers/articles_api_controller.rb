class ArticlesAPIController < ApplicationController


  def index

    response = HTTParty.get('http://api.usatoday.com/open/articles/topnews/sports?api_key=mnsmzv8pam9p2p2sswj4efs8')

    arr = response["rss"]["channel"]["item"]
    
    titles = arr.map do |a|
      a["title"]
      end
    links = arr.map do |a|
      a["link"]
    end
    
    

  end


end