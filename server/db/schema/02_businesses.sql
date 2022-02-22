-- Drop and recreate businesses table

DROP TABLE IF EXISTS businesses CASCADE;

CREATE TABLE businesses (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES categories ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  city VARCHAR (255) NOT NULL,
  province_state VARCHAR (255) NOT NULL,
  country VARCHAR (255) NOT NULL,
  unit_number VARCHAR (255),
  street_address VARCHAR (255) NOT NULL,
  postal_code VARCHAR (255),
  phone_number VARCHAR (255),
  website_url  VARCHAR (255),
  image_url VARCHAR (255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);