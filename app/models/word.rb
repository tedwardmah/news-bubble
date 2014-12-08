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
    ########### Yaniv Comment ###########
    # It looks like you're just converting the 
    # ActiveRecord collection to an array.
    # You could also do it by calling to_a on it.

    # If you're only going to use the keyword value of each word,
    # then you may as well have the map return that keyword.
    # ie:
    # all_keywords = self.all.map {|word| word.keyword}
    #####################################
    all_words = self.all.map {|word| word}
    excluded_words_raw = File.readlines('./app/assets/files/excluded_words.txt')
    excluded_words = excluded_words_raw.map {|word| word.chomp }
    all_words.reject! {|word| excluded_words.include?(word.keyword)}
  end

  def total_count
      ########### Yaniv Comment ###########
      # I know we haven't seen this method since
      # the early weeks of class... But do you remember
      # inject? It does a very similar thing to what you
      # have going on here.
      #####################################
    count = 0
    self.mentions.each do |mention|
      count += mention.word_count
    end
    count
  end

  def random_image
    self.articles.where("img_url != ''").sample.img_url
  end

end
