UPDATE users
SET email = ${email}, hash = ${hash}
WHERE user_id = ${user_id}
returning *;