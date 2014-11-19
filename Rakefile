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
      Article.create(hash)
    end
  end

  desc "load reddit data"
  task :load_reddit_data do
    response = HTTParty.get('http://www.reddit.com/user/caindaddy/m/prosports/.json')
    arr = response["data"]["children"]
    
    arr.each do |a|
      hash = {}
      hash[:api] = Api.find_by(name: "Reddit")
      hash[:topic] = Topic.find_by(name: "sports")
      hash[:headline] = a["title"]
      hash[:url] = a["domain"]
      hash[:date] = Date.New(a["created_utc"].to_i)

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


