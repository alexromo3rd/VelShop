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

INSERT INTO products (
  category,
  price,
  description,
  name,
  count_in_stock
) VALUES (
  'Limited',
  24.99,
  'Trophy Wife album on cassette tape',
  'Trophy Wife Cassette',
  10
) RETURNING *;

INSERT INTO product_images (
  product_id,
  url
) VALUES (
  1,
  'https://images.squarespace-cdn.com/content/v1/55e4eb90e4b0df231a065902/1615495741396-VCZ1V9X994ZIYQQIE5YV/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/IMG_6219.JPG?format=2500w'
) RETURNING *;

INSERT INTO products (
  category,
  price,
  description,
  name,
  count_in_stock
) VALUES (
  'Limited',
  39.99,
  'La Sena Ave vinyl album',
  'La Sena Ave Vinyl Album',
  10
) RETURNING *;

INSERT INTO product_images (
  product_id,
  url
) VALUES (
  2,
  'https://images.squarespace-cdn.com/content/v1/55e4eb90e4b0df231a065902/1602531610633-H0B8F2V6MSWUUNYW5II0/ke17ZwdGBToddI8pDm48kFH7YacpcZA2AQ9_X67wx_R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfC4BUyPPg7DyEI8kBYfXRxdtPj_SoQa8uKQ9fg7M7Dg0scVHb0s5G6b7dBthyie1A/lasena-vinylmok.jpg?format=2500w'
) RETURNING *;

INSERT INTO products (
  category,
  price,
  description,
  name,
  count_in_stock
) VALUES (
  'Socks',
  9.99,
  'Vel the Wonder Socks',
  'Vel Socks',
  6
) RETURNING *;

INSERT INTO product_images (
  product_id,
  url
) VALUES (
  3,
  'https://images.squarespace-cdn.com/content/v1/55e4eb90e4b0df231a065902/1606443121072-2SSJNJ1L5BS8FK98O1PN/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/IMG_7268.JPG?format=2500w'
) RETURNING *;

INSERT INTO products (
  category,
  price,
  description,
  name,
  count_in_stock
) VALUES (
  'Shirts',
  19.99,
  'The Spellout Kid Laker Tshirt - Black',
  'Black Spellout Kid Shirt',
  12
) RETURNING *;

INSERT INTO product_images (
  product_id,
  url
) VALUES (
  4,
  'https://images.squarespace-cdn.com/content/v1/55e4eb90e4b0df231a065902/1601015852619-LBAVFO6BQSNWCFMFZE7T/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/2223F472-7646-4751-A95D-9E266A2E09C8.jpeg?format=2500w'
) RETURNING *;

INSERT INTO products (
  category,
  price,
  description,
  name,
  count_in_stock
) VALUES (
  'Shirts',
  19.99,
  'The Spellout Kid Laker Tshirt - Light Blue',
  'Light Blue Spellout Kid Shirt',
  12
) RETURNING *;

INSERT INTO product_images (
  product_id,
  url
) VALUES (
  5,
  'https://images.squarespace-cdn.com/content/v1/55e4eb90e4b0df231a065902/1599837339894-ZHPXDLAXJ7QGUJ9TL9DC/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmihaE5rlzFBImxTetd_yW5btdZx37rH5fuWDtePBPDaHF5LxdCVHkNEqSYPsUQCdT/AfterlightImage.JPG?format=2500w'
) RETURNING *;

INSERT INTO products (
  category,
  price,
  description,
  name,
  count_in_stock
) VALUES (
  'Hats',
  29.99,
  'Powder Blue Bussin Bucket Hat',
  'Bucket Hat',
  15
) RETURNING *;

INSERT INTO product_images (
  product_id,
  url
) VALUES (
  6,
  'https://images.squarespace-cdn.com/content/v1/55e4eb90e4b0df231a065902/1619229578933-N1573K881NSEJYBY4UT2/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/Untitled_Artwork.JPG?format=2500w'
) RETURNING *;

INSERT INTO products (
  category,
  price,
  description,
  name,
  count_in_stock
) VALUES (
  'Jackets',
  49.99,
  'Coach Wife Jacket',
  'Coach Wife Jacket',
  5
) RETURNING *;

INSERT INTO product_images (
  product_id,
  url
) VALUES (
  7,
  'https://images.squarespace-cdn.com/content/v1/55e4eb90e4b0df231a065902/1604690350974-BGXPQGQT9I4UVWGPL2FT/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmrMDYraMJMCQwFxTSOIP7LpSBEQpA-g5k6VTjWbSuadHJq0dp98hg5AZvIaPb3DoM/vel-twb-carousel4b.png?format=2500w'
) RETURNING *;

INSERT INTO products (
  category,
  price,
  description,
  name,
  count_in_stock
) VALUES (
  'Misc',
  6.99,
  'The Spellout Kid Notepad',
  'The Spellout Kid Notepad',
  12
) RETURNING *;

INSERT INTO product_images (
  product_id,
  url
) VALUES (
  8,
  'https://images.squarespace-cdn.com/content/v1/55e4eb90e4b0df231a065902/1599839158163-6QIWKO3ST7EZ4XABQ6NG/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/IMG_1875.JPG?format=2500w'
) RETURNING *;

INSERT INTO products (
  category,
  price,
  description,
  name,
  count_in_stock
) VALUES (
  'Misc',
  9.99,
  'Gold Caps Enamel Pin',
  'Gold Caps Enamel Pin',
  8
) RETURNING *;

INSERT INTO product_images (
  product_id,
  url
) VALUES (
  9,
  'https://images.squarespace-cdn.com/content/v1/55e4eb90e4b0df231a065902/1599839602697-GNBE2HWQK2JK5PLOBOI7/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/IMG_1876.JPG?format=2500w'
) RETURNING *;