# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

namespace :db do
  desc "load top articles in database"
  task :load_usa_today_data do

    response = HTTParty.get('http://api.usatoday.com/open/articles/topnews/sports?api_key=mnsmzv8pam9p2p2sswj4efs8')
    arr = response["rss"]["channel"]["item"]
    
    parsed_data = arr.map do |article|
      hash = {}
      hash[:headline] = a['title']
      hash[:url] = a['link']
      hash[:date] = a['pubDate']
      hash
    end

    titles = arr.map do |a|
        a["title"]
    end
    
    links = arr.map do |a|
      a["link"]
    end
    
    dates = arr.map do |a|
      a["pubDate"]
    end

    14.times do
      articles = Article.new({headline: titles, url: links, date: dates})

  end


end