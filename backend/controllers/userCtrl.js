const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db');
    const { name, email, password } = req.body;
    const foundUser = await db.user.find_user_by_email({ email });

    try {
      if (foundUser[0]) {
        res.status(400).send('User already exists');
      } else {
        let salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await db.user.register_user({ name, email, hash });
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
      }
    } catch (error) {
      res.status(406).send('Invalid entry');
    }
  },
  login: async (req, res) => {
    const db = req.app.get('db');
    const { email, password } = req.body;

    const existingUser = await db.user.find_user_by_email({ email });
    if (!existingUser[0]) {
      res.status(404).send('User not found');
      return;
    }

    const isAuthenticated = bcrypt.compareSync(password, existingUser[0].hash);
    if (!isAuthenticated) {
      res.status(401).send('Password is incorrect');
      return;
    }

    delete existingUser[0].hash;

    req.session.user = existingUser[0];
    res.status(202).send(req.session.user);
  },
  logout: async (req, res) => {
    req.session.destroy();
    res.status(200).send('Successfully logged out');
  },
  deleteUser: async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const foundUser = await db.user.find_user_by_id({ id });

    try {
      if (foundUser[0].user_id === Number(id)) {
        await db.user.delete_user({ id });

        res.status(200).send('Successfully deleted account');
        req.session.destroy();
      } else {
        res.stats(400).send('User does not match');
      }
    } catch (error) {
      res.status(400).send('Unable to delete account');
    }
  },
  updateUser: async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const foundUser = await db.user.find_user_by_id({ id });
    const { user_id } = foundUser[0];
    const { email = null, password = null } = req.body;

    // only email provided
    if (!password && email) {
      if (email !== foundUser[0].email) {
        let hash = foundUser[0].hash;
        const updatedUser = await db.user.update_user({ user_id, email, hash });

        req.session.user = updatedUser[0];
        delete updatedUser[0].hash;
        res.status(202).send(req.session.user);
        return;
      } else {
        res.status(406).send('Email matches current email');
        return;
      }
    }

    // only password provided
    if (password && !email) {
      if (!bcrypt.compareSync(password, foundUser[0].hash)) {
        let email = foundUser[0].email;
        let salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(password, salt);
        const updatedUser = await db.user.update_user({ user_id, email, hash });
        req.session.user = updatedUser[0];
        delete updatedUser[0].hash;
        res.status(202).send(req.session.user);
        return;
      } else {
        res.status(406).send('Password matches current password');
        return;
      }
    }

    // if email and password provided
    if (password && email) {
      if (
        !bcrypt.compareSync(password, foundUser[0].hash) &&
        email !== foundUser[0].email
      ) {
        let salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(password, salt);
        const updatedUser = await db.user.update_user({ user_id, email, hash });
        req.session.user = updatedUser[0];
        delete updatedUser[0].hash;
        res.status(202).send(req.session.user);
        return;
      } else {
        res.status(406).send('Data matches current user email or password');
        return;
      }
    }

    // if email and password are not provided
    if (!password && !email) {
      res.status(406).send('No data provided');
    }
  },
};
