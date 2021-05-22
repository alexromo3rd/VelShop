INSERT INTO users (
  name,
  email,
  hash
) VALUES (
  ${name},
  ${email},
  ${hash}
) RETURNING user_id, email;