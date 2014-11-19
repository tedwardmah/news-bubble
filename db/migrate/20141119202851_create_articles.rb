class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.references :topic, index: true
      t.references :api, index: true
      t.string :headline
      t.string :lead
      t.string :url
      t.date :date
      t.string :source_id
      t.integer :popularity_score

      t.timestamps
    end
  end
end
