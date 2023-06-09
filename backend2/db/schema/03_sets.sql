DROP TABLE IF EXISTS sets CASCADE;

CREATE TABLE sets (
  id SERIAL PRIMARY KEY NOT NULL,
  workout_id INTEGER REFERENCES workouts(id) ON DELETE CASCADE,
  weight INTEGER NOT NULL DEFAULT (0),
  reps INTEGER NOT NULL,
  quantity INTEGER,
  exercise VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);
