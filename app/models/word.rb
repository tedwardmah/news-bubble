class Word < ActiveRecord::Base
  has_many :mentions
  has_many :articles, :through => :mentions
end
