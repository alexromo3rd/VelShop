const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db');
    const { name, email, password } = req.body;
    const foundUser = await db.user.find_user_by_email([email]);

    try {
      if(foundUser[0]) {
        res.status(409).send('User already exists')
      } else {
        let salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await db.user.register_user([name, email, hash]);
        req.session.user = newUser[0]
        res.status(201).send(req.session.user)
      }
    } catch (error) {
      res.status(406).send('Invalid entry')
    }
  },
  updateUser: async (req, res) => {},
  login: async (req, res) => {},
  logout: async (req, res) => {},
  deleteUser: async (req, res) => {},
};
