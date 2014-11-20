class Article < ActiveRecord::Base
  belongs_to :topic
  belongs_to :api
  has_many :mentions
  has_many :words, :through => :mentions
end
