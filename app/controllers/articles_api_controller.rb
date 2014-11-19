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

  def reddit
    response = HTTParty.get('http://www.reddit.com/user/caindaddy/m/prosports/.json')
  api_response = response["data"]
  arr = response
    arr.each do |a|
      hash = {}
      hash[:api] = Api.find_by(name: "Reddit")
      hash[:topic] = Topic.find_by(name: "sports")
      hash[:headline] = a["title"] 
      hash[:url] = a["url"]
  end
end