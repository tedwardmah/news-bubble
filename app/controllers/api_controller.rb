class APIController < ApplicationController

  def usa_today
    response = HTTParty.get('http://api.usatoday.com/open/articles/topnews/sports?api_key=mnsmzv8pam9p2p2sswj4efs8')
    arr = response["rss"]["channel"]["item"]

    arr.each do |a|
      hash = {}
      hash[:headline] = a['title']
      hash[:url] = a['link']
      hash[:date] = a['pubDate']
      hash[:lead] = a["description"]
      Article.create!(hash)
    end
  end

  

  def reddit
    response = HTTParty.get('http://www.reddit.com/user/caindaddy/m/prosports/.json')
    arr = response['data']['children'][0...20].map { |e| e["data" != ] }

    arr.each do |a|
      hash = {}
      hash[:api] = Api.find_by(name: "Reddit")
      hash[:topic] = Topic.find_by(name: "sports")
      hash[:headline] = a["title"]
      hash[:url] = a["url"]
      hash[:lead] = a["selftext"]
      hash[:date] = Time.at(a["created_utc"].to_i)
      Article.create(hash)
    end
  end

  def fetch_nyt_articles(section = 'sports') #this defaults to sports for the moment but should eventually be dynamic
    nyt_api_key = '53d66b4923e199e21d3304cfc06527ea:3:57497200'
    nyt_url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/#{section}/1.json?api-key=#{nyt_api_key}"
    api_response = HTTParty.get(nyt_url)
    articles = api_response['results']

    articles.each do |article_data|
      hash = {}
      hash[:api_id]     = Api.find_by(name: "NYT").id
      hash[:topic_id]   = Topic.find_by(name: "sports").id
      hash[:url]        = article_data['url']
      hash[:headline]   = article_data['title']
      hash[:lead]       = article_data['abstract']
      hash[:date]       = Date.strptime(article_data['published_date'], "%Y-%m-%d")
      hash[:source_id]  = article_data['id']

      Article.create(hash)
    end
  end
end