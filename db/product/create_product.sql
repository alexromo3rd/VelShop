INSERT INTO products (
  category,
  price,
  description,
  name
) VALUES (
  $1,
  $2,
  $3,
  $4
) RETURNING *;