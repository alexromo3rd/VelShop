SELECT * FROM product_images pi
JOIN products p
ON p.product_id = pi.product_id
where p.product_id = ${id};