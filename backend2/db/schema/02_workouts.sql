DROP TABLE IF EXISTS workouts CASCADE;

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  workout_date date,
  title VARCHAR(255) NOT NULL,
  description text,
  picture_url VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);
