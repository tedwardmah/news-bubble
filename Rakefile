# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)
require './app/models/api'
require './app/models/topic'
require './app/models/article'
require './app/models/word'
require './app/models/mention'

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
    @api = Api.find_by(name: "USA Today")
    @topic = Topic.find_by(name: "sports")



    arr.each do |a|
      hash = {}
      hash[:api] = @api
      hash[:topic] = @topic
      hash[:source] = "USA Today"
      hash[:headline] = a['title']
      hash[:url] = a['link']
      hash[:date] = Date.parse(a['pubDate'])
      hash[:lead] = a['description']
      hash[:img_url] = nil
      article = Article.create(hash)
      article.parse_article
    end
  end

  desc "load reddit data"
  task :load_reddit_data do
    response = HTTParty.get('http://www.reddit.com/user/caindaddy/m/prosports/.json')
    arr = response['data']['children'][0...20].map { |e| e["data"] }
    @api = Api.find_by(name: "Reddit")
    @topic = Topic.find_by(name: "sports")

    arr.each do |a|
      hash = {}
      hash[:api] = @api
      hash[:topic] = @topic
      hash[:headline] = a["title"]
      hash[:source] = a["domain"]
      hash[:img_url] = a["thumbnail"]
      hash[:url] = a["url"]
      hash[:lead] = a["selftext"]
      hash[:date] = Time.at(a["created_utc"].to_i)
      article = Article.create(hash)
      article.parse_article
    end
  end

  desc 'load feedzilla data'
  task :load_feedzilla_data do
    response = HTTParty.get('http://api.feedzilla.com/v1/categories/27/articles.json')
    arr = response["articles"]
    @api = Api.find_by(name: "Feedzilla")
    @topic = Topic.find_by(name: "sports")

    arr.each do |a|
      hash = {}
      hash[:api] = @api
      hash[:topic] = @topic
      hash[:headline] = a["title"]
      hash[:lead] = a["summary"]
      hash[:date] = Date.parse(a["publish_date"])
      hash[:source] = a["source"]
      hash[:url] = a["source_url"]
      hash[:img_url] = nil
      article = Article.create(hash)
      article.parse_article
    end
  end

  desc 'load NYT data'
  task :load_nyt_data do
    section = 'sports' #this defaults to sports for the moment but should eventually be dynamic
    nyt_api_key = '53d66b4923e199e21d3304cfc06527ea:3:57497200'
    nyt_url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/#{section}/1.json?api-key=#{nyt_api_key}"
    api_response = HTTParty.get(nyt_url)
    second_response = HTTParty.get(nyt_url + "&offset=20")
    third_response = HTTParty.get(nyt_url + "&offset=40")
    articles = api_response['results'] + second_response['results'] + third_response['results']
    @api = Api.find_by(name: "NYT").id
    @topic = Topic.find_by(name: "sports").id

    articles.each do |article_data|
      hash = {}
      hash[:api_id]     = @api
      hash[:topic_id]   = @topic
      hash[:url]        = article_data['url']
      hash[:source]     = "The New York Times"
      hash[:headline]   = article_data['title'].gsub("&#8217;", "'")
      hash[:lead]       = article_data['abstract'].gsub("&#8217;", "'")
      hash[:date]       = Date.strptime(article_data['published_date'], "%Y-%m-%d")
      hash[:source_id]  = article_data['id']
      if !article_data['media'].empty? && !article_data['media'][0]['media-metadata'].empty?
        hash[:img_url] = article_data['media'][0]['media-metadata'][1]['url']
      end

      article = Article.create(hash)
      article.parse_article

    end

  end

  desc 'load apis and topic(s)'
  task :seed_api_and_topic_data do

    # ***** APIs *****
    Api.create({name: "NYT"})
    Api.create({name: "USA Today"})
    Api.create({name: "Guardian"})
    Api.create({name: "Reddit"})
    Api.create({name: "Feedzilla"})

    # ***** TOPICS *****
    Topic.create({name: "sports"})
  end
end

desc 'do errrythang'
task :all => ['db:create', 'db:migrate', 'db:seed_api_and_topic_data', 'db:load_nyt_data', 'db:load_usa_today_data']