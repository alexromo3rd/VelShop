INSERT INTO products (
  category,
  price,
  description,
  name,
  count_in_stock
) VALUES (
  ${category},
  ${price},
  ${description},
  ${name},
  ${count_in_stock}
) RETURNING *;