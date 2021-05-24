CREATE TABLE products (
  product_id  SERIAL PRIMARY KEY NOT NULL,
  category    VARCHAR(100) NOT NULL,
  price       DECIMAL NOT NULL,
  description VARCHAR(1000) NOT NULL,
  name        VARCHAR(100) NOT NULL,
  count_in_stock INTEGER NOT NULL
);

CREATE TABLE product_images (
  product_image_id  SERIAL PRIMARY KEY NOT NULL,
  product_id        INTEGER REFERENCES products (product_id),
  url               TEXT NOT NULL
);

CREATE TABLE users (
  user_id    SERIAL PRIMARY KEY NOT NULL,
  name       VARCHAR(100) NOT NULL,
  email      VARCHAR(100) NOT NULL,
  hash       VARCHAR(1000) NOT NULL
);

{
    "category": "Misc",
    "price": 4.99,
    "description": "Vel the Wonder Stickers",
    "name": "Vel Stickers",
    "count_in_stock": 10
}

{
    "category": "Limited",
    "price": 19.99,
    "description": "Vel the Wonder Limited Edition Vinyl Album",
    "name": "Vel Vinyl Album",
    "count_in_stock": 50
}

{
    "category": "Socks",
    "price": 9.99,
    "description": "Vel the Wonder Socks",
    "name": "Vel Socks",
    "count_in_stock": 14
}

{
    "category": "Shirts",
    "price": 19.99,
    "description": "Vel the Wonder Shirt",
    "name": "Vel Shirt",
    "count_in_stock": 40
}

{
    "category": "Hats",
    "price": 29.99,
    "description": "Vel the Wonder Hat",
    "name": "Vel Hat",
    "count_in_stock": 15
}

{
    "category": "Jackets",
    "price": 49.99,
    "description": "Vel the Wonder Bomber Jacket",
    "name": "Bomber Jacket",
    "count_in_stock": 5
}