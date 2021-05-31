INSERT INTO users (
  name,
  email,
  hash
) VALUES (
  ${name},
  ${email},
  ${hash}
) RETURNING name, user_id, email;