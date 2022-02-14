-- Drop and recreate reward_points table

DROP TABLE IF EXISTS reward_points CASCADE;

CREATE TABLE reward_points (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users ON DELETE CASCADE,
  reward_points INTEGER NOT NULL DEFAULT 0
);