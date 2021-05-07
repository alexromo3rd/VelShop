CREATE TABLE products (
  product_id  SERIAL PRIMARY KEY NOT NULL,
  category    VARCHAR(100) NOT NULL,
  price       DECIMAL NOT NULL,
  description VARCHAR(1000) NOT NULL,
  name        VARCHAR(100) NOT NULL
);

CREATE TABLE product_images (
  product_image_id  SERIAL PRIMARY KEY NOT NULL,
  product_id        INTEGER REFERENCES products (product_id),
  url               TEXT NOT NULL
);

CREATE TABLE users (
  user_id    SERIAL PRIMARY KEY NOT NULL,
  email      VARCHAR(100) NOT NULL,
  hash       VARCHAR(1000) NOT NULL
);

