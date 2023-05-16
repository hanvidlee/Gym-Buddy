# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_05_15_185946) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "day_workouts", force: :cascade do |t|
    t.integer "day_id"
    t.integer "workout_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "days", force: :cascade do |t|
    t.string "month"
    t.integer "day"
    t.integer "year"
    t.boolean "empty"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "deleted_at"
  end

  create_table "exercise_sets", force: :cascade do |t|
    t.integer "exercise_id"
    t.integer "weight"
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "exercises", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "favourites", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.integer "product_id"
    t.datetime "created_at", default: -> { "now()" }, null: false
    t.datetime "deleted_at"
    t.index ["user_id", "product_id"], name: "test", unique: true
  end

  create_table "messages", id: :serial, force: :cascade do |t|
    t.integer "session_id", null: false
    t.integer "sender_id", null: false
    t.text "message"
    t.datetime "created_at", default: -> { "now()" }
  end

  create_table "orders", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.integer "product_id"
    t.datetime "purchase_time", default: -> { "now()" }, null: false
    t.boolean "purchased", default: false, null: false
    t.boolean "removed", default: false, null: false
  end

  create_table "products", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.string "title", limit: 255, null: false
    t.text "description"
    t.string "picture_url", limit: 255, null: false
    t.string "thumbnail_url", limit: 255, null: false
    t.integer "price", default: 0, null: false
    t.string "condition", limit: 255, null: false
    t.string "category", limit: 255, null: false
    t.datetime "created_at"
    t.boolean "available", default: true, null: false
    t.boolean "deleted", default: false, null: false
  end

  create_table "reps", force: :cascade do |t|
    t.integer "exercise_set_id"
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sessions", id: :serial, force: :cascade do |t|
    t.integer "customer_id"
    t.integer "product_id"
    t.text "seller_id"
  end

  create_table "set_workouts", force: :cascade do |t|
    t.integer "exercise_set_id"
    t.integer "workout_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_workouts", force: :cascade do |t|
    t.integer "workout_id"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.string "picture"
    t.string "description"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "favourites", "products", name: "favourites_product_id_fkey", on_delete: :cascade
  add_foreign_key "messages", "sessions", name: "messages_session_id_fkey", on_delete: :cascade
  add_foreign_key "orders", "products", name: "orders_product_id_fkey", on_delete: :cascade
  add_foreign_key "sessions", "products", name: "sessions_product_id_fkey", on_delete: :cascade
end
