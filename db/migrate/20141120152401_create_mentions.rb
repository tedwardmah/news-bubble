class CreateMentions < ActiveRecord::Migration
  def change
    create_table :mentions do |t|
      t.references :word, index: true
      t.references :article, index: true
      t.integer :word_count

      t.timestamps
    end
  end
end
