class ArticlesAPIController < ApplicationController


  def index

    response = HTTParty.get('http://api.usatoday.com/open/articles/topnews/sports?api_key=mnsmzv8pam9p2p2sswj4efs8')
    arr = response["rss"]["channel"]["item"]
    
    arr.each do |a|
      hash = {}
      hash[:headline] = a['title']
      hash[:url] = a['link']
      hash[:date] = a['pubDate']
      Article.create!(hash)
    end
  
    @article = Article.all

  end
end