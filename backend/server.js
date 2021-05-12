require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
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
})
  .then((db) => {
    app.set('db', db);
    console.log('Database connected');
  })
  .catch((err) => {
    console.log(err);
  });

// Auth endpoints
app.post('/auth/register', register);
app.post('/auth/login', login);
app.delete('/auth/logout', logout);
app.delete('/auth/delete/:id', deleteUser);
app.put('/auth/update/:id', updateUser);

// Product endpoints
app.get('/api/products/categories', getProductCategories);
app.get('/api/products/:id', getProduct);
app.get('/api/products', getAllProducts);
app.post('/api/products', createProduct);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
