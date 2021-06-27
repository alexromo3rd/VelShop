require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const path = require('path');
const {
  getAllProducts,
  getProduct,
  createProduct,
  getProductCategories,
} = require('./controllers/productCtrl');
const {
  register,
  updateUser,
  login,
  logout,
  deleteUser,
} = require('./controllers/userCtrl');

const { submitPayment } = require('./controllers/paymentCtrl.js');
const { sendEmail } = require('./controllers/nodeMailerCtrl');

const PORT = process.env.SERVER_PORT || 5000;
const { DATABASE_URL, SESSION_SECRET } = process.env;

const app = express();

// middleware
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

massive({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set('db', db);
    console.log('Database connected');
  })
  .catch((err) => {
    console.log(err);
  });

// Auth endpoints
app.post('/api/register', register);
app.post('/api/login', login);
app.delete('/api/logout', logout);
app.delete('/api/delete/:id', deleteUser);
app.put('/api/update/:id', updateUser);

// Product endpoints
app.get('/api/products', getAllProducts);
app.get('/api/products/categories', getProductCategories);
app.get('/api/products/:id', getProduct);
app.post('/api/products', createProduct);

// Payment endpoint
app.post('/api/payment', submitPayment);

// Nodemailer endpoint
app.post('/api/send', sendEmail);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
