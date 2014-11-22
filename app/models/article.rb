class Article < ActiveRecord::Base
  belongs_to :topic
  belongs_to :api
  has_many :mentions
  has_many :words, :through => :mentions

  def parse_article
    words_count_pairs = Hash.new(0)
    headline_words = self.headline.scan(/\b[a-zA-z]+-?[a-zA-Z]+\b/)
    headline_words.each do |word|
      words_count_pairs[word.downcase] += 1
    end

    lead_words = self.lead.scan(/\b[a-zA-z]+-?[a-zA-Z]+\b/)
    lead_words.each do |word|
      words_count_pairs[word.downcase] += 1
    end

    create_mentions(words_count_pairs)
  end

  def create_mentions(words_count_pairs)
    words_count_pairs.each do |word, count|
      if existing_word = Word.find_by(keyword: word)
        Mention.create({
          word_id: existing_word.id,
          article_id: self.id,
          word_count: count,
          })
      else
        new_word = Word.create({keyword: word})
        Mention.create({
          word_id: new_word.id,
          article_id: self.id,
          word_count: count,
          })
      end
    end
  end

end
