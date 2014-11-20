# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141120152401) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "apis", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "articles", force: true do |t|
    t.integer  "topic_id"
    t.integer  "api_id"
    t.string   "headline"
    t.string   "lead"
    t.string   "url"
    t.date     "date"
    t.string   "source_id"
    t.integer  "popularity_score"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "articles", ["api_id"], name: "index_articles_on_api_id", using: :btree
  add_index "articles", ["topic_id"], name: "index_articles_on_topic_id", using: :btree

  create_table "mentions", force: true do |t|
    t.integer  "word_id"
    t.integer  "article_id"
    t.integer  "word_count"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "mentions", ["article_id"], name: "index_mentions_on_article_id", using: :btree
  add_index "mentions", ["word_id"], name: "index_mentions_on_word_id", using: :btree

  create_table "topics", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "words", force: true do |t|
    t.string   "keyword"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
