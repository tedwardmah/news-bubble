class Word < ActiveRecord::Base
  has_many :mentions
  has_many :articles, :through => :mentions


  def self.parse_articles_stupidly
    headlines = Article.all.map do |article|
      article.headline
    end
    headlines.each do |headline|
      words = headline.split(' ')
      words.each do |word|
        Word.create({keyword: word.downcase})
      end
    end
  end

end
