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
    saveUninitialized: true,
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

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
