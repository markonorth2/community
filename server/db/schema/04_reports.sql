-- Drop and recreate reports table

DROP TABLE IF EXISTS reports CASCADE;

CREATE TABLE reports (
  id SERIAL PRIMARY KEY NOT NULL,
  service_id INTEGER REFERENCES services ON DELETE CASCADE,
  user_id INTEGER REFERENCES users ON DELETE CASCADE,
  business_id INTEGER REFERENCES businesses ON DELETE CASCADE,
  review TEXT NOT NULL,
  price MONEY NOT NULL,
  date DATE NOT NULL,
  receipt_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);