class ChangeLeadFromStringToText < ActiveRecord::Migration
  def change
    change_column :articles, :lead, :text
  end
end
