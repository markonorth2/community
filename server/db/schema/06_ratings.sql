-- Drop and recreate ratings table

DROP TABLE IF EXISTS ratings CASCADE;

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id INTEGER REFERENCES businesses ON DELETE CASCADE,
  report_id INTEGER REFERENCES reports ON DELETE CASCADE,
  customer_service_rating DECIMAL NOT NULL DEFAULT 0,
  product_rating DECIMAL NOT NULL DEFAULT 0
);