SELECT url FROM product_images
JOIN products p
ON p.product_id = product_images.product_id;