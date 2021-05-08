const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db');
    const { name, email, password } = req.body;
    const foundUser = await db.user.find_user_by_email({email});

    try { 
      if(foundUser[0]) {
        res.status(409).send('User already exists')
      } else {
        let salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await db.user.register_user({name, email, hash});
        req.session.user = newUser[0]
        res.status(201).send(req.session.user)
      }
    } catch (error) {
      res.status(406).send('Invalid entry')
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

    delete existingUser[0].password;

    req.session.user = existingUser[0];
    res.status(202).send(req.session.user);
  },
  logout: async (req, res) => {
    req.session.destroy()
    res.status(200).send('Successfully logged out')
  },
  deleteUser: async (req, res) => {
    const db = req.app.get('db');

    const { email } = req.session.user;

    const existingUser = await db.product.find_user_by_email({email})
    
    return;
  },
  updateUser: async (req, res) => {

  },
};
