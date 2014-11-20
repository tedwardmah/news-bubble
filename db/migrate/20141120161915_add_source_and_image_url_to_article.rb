class AddSourceAndImageUrlToArticle < ActiveRecord::Migration
  def change
    add_column :articles, :source, :string
    add_column :articles, :img_url, :string
  end
end
