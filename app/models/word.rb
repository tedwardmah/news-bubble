class Word < ActiveRecord::Base
  has_many :mentions
  has_many :articles, :through => :mentions

  def self.sort_by_total_count(num_results)
    words = get_good_words
    sorted_words = words.sort_by do |word|
      word.total_count
    end
    sorted_words.reverse[0..(num_results-1)]
  end

  def self.get_good_words
    all_words = self.all.map {|word| word}
    excluded_words_raw = File.readlines('./app/assets/files/excluded_words.txt')
    excluded_words = excluded_words_raw.map {|word| word.chomp }
    all_words.reject! {|word| excluded_words.include?(word.keyword)}
  end

  def total_count
    count = 0
    self.mentions.each do |mention|
      count += mention.word_count
    end
    count
  end

end
