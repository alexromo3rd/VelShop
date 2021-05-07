require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {
  getAllProducts,
  getProduct,
  createProduct,
  getProductCategories,
} = require('./controllers/productsController');
const {
  register,
  login,
  logout,
  deleteUser,
} = require('./controllers/authController');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

// middleware
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set('db', db);
  console.log('Database connected');
});

// Auth endpoints
app.post('/auth/register', register);
app.post('/auth/login', login);
app.post('/auth/logout', logout);
app.get('/auth/delete', deleteUser);

// Product endpoints
app.get('/api/products', getAllProducts);
app.get('/api/products/:id', getProduct);
app.post('/api/products', createProduct);
app.delete('/api/products/categories', getProductCategories);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
