# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)
require './app/models/api'
require './app/models/topic'
require './app/models/article'

ActiveRecord::Base.establish_connection({
  adapter: 'postgresql',
  database: 'news_bubble_development'
  })

Rails.application.load_tasks


namespace :db do

  desc "load top USA Today articles in database"
  task :load_usa_today_data do
    response = HTTParty.get('http://api.usatoday.com/open/articles/topnews/sports?api_key=mnsmzv8pam9p2p2sswj4efs8')
    arr = response["rss"]["channel"]["item"]

    arr.each do |a|
      hash = {}
      hash[:api] = Api.find_by(name: "USA Today")
      hash[:topic] = Topic.find_by(name: "sports")
      hash[:headline] = a['title']
      hash[:url] = a['link']
      hash[:date] = a['pubDate']
      hash[:lead] = a["description"]
      Article.create(hash)
    end
  end

  desc "load reddit data"
  task :load_reddit_data do
    response = HTTParty.get('http://www.reddit.com/user/caindaddy/m/prosports/.json')
    arr = response['data']['children'][0...20].map { |e| e["data"] }

    arr.each do |a|
      hash = {}
      hash[:api] = Api.find_by(name: "Reddit")
      hash[:topic] = Topic.find_by(name: "sports")
      hash[:headline] = a["title"]
      hash[:url] = a["domain"]
      hash[:date] = Time.at(a["created_utc"].to_i)
      Article.create(hash)
    end
  end

  desc 'load NYT data'
  task :load_nyt_data do
    section = 'sports' #this defaults to sports for the moment but should eventually be dynamic
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

  desc 'load apis and topic(s)'
  task :seed_api_and_topic_data do

    # ***** APIs *****
    Api.create({name: "NYT"})
    Api.create({name: "USA Today"})
    Api.create({name: "Guardian"})
    Api.create({name: "Reddit"})

    # ***** TOPICS *****
    Topic.create({name: "sports"})
  end
end