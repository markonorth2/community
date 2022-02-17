-- Uncommend the line below if wants to drop example table urls
-- DROP TABLE IF EXISTS urls CASCADE;

-- Drop and recreate users table

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR (255) NOT NULL,
  last_name VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  user_name VARCHAR (255) NOT NULL,
  password VARCHAR (255) NOT NULL,
  description TEXT,
  image_url VARCHAR (255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);