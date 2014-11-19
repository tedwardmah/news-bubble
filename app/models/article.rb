class Article < ActiveRecord::Base
  belongs_to :topic
  belongs_to :api
end
