INSERT INTO product_images (
  product_id,
  url
) VALUES (
  ${product_id},
  ${url}
) RETURNING *;