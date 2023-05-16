ActiveRecord::Schema.define(version: 2023_05_16_202856) do

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
    t.integer "weight"
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "exercise"
    t.integer "reps"
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
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

  create_table "workouts", force: :cascade do |t|
    t.string "picture"
    t.string "description"
    t.datetime "deleted_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
