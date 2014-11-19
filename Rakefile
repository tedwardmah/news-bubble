# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)
require './app/models/api'
require './app/models/topic'

ActiveRecord::Base.establish_connection({
  adapter: 'postgresql',
  database: 'news_bubble_development'
  })

Rails.application.load_tasks

namespace :db do
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