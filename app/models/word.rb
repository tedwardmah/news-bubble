class Word < ActiveRecord::Base
  has_many :mentions
  has_many :articles, :through => :mentions

  def self.sort_by_total_count(num_results)
    words = self.all
    sorted_words = words.sort_by do |word|
      word.total_count
    end
    sorted_words.reverse[0..(num_results-1)]
  end

  def total_count
    count = 0
    self.mentions.each do |mention|
      count += mention.word_count
    end
    count
  end

end
