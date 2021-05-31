SELECT * FROM product_images pi
JOIN products p
ON p.product_id = pi.product_id
WHERE category = ${category};