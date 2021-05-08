INSERT INTO products (
  category,
  price,
  description,
  name
) VALUES (
  ${category},
  ${price},
  ${description},
  ${name}
) RETURNING *;