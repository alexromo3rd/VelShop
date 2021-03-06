E-commerce full stack project

## MVP

- users should be able to find products
- users should be able to purchase products
- users should be able to register an account, and log in and log out
- users should be able to have a cart
- users should be able to checkout and purchase items
- user profile page

## ICEBOX

- admin UI
- order history
- ability to log in with google
- wishlist/like/favorite products
- users should be able to delete an account
- users should be able to sign up for promotional emails
- events page to display info on upcoming performances

### Dependencies

- axios
- express
- massive
- express-session
- redux
- react-redux
- redux-promise-middleware
- redux-devtools-extension
- react-router-dom
- react-toastify
- bcryptjs
- dotenv
- stripe
- passport
- passport-google-oauth20

## Database

### Tables

products

```SQL
CREATE TABLE products (
	product_id  SERIAL PRIMARY KEY NOT NULL,
	category    VARCHAR(100) NOT NULL,
	price       DECIMAL NOT NULL,
	description VARCHAR(1000) NOT NULL,
	name        VARCHAR(100) NOT NULL
);
```

product_images

```SQL
CREATE TABLE product_images (
	product_image_id SERIAL PRIMARY KEY NOT NULL,
	product_id      INTEGER REFERENCES products (product_id),
	url             TEXT NOT NULL
);

```

users

```SQL
	CREATE TABLE users (
	user_id    SERIAL PRIMARY KEY NOT NULL,
	email      VARCHAR(100) NOT NULL,
	hash   VARCHAR(1000) NOT NULL
);

```

## Server

### Endpoints

#### Products

- get all products => GET '/api/products'
- get specific product => GET '/api/products/:id'
- create products => POST '/api/products'
- get product categories => GET '/api/products/categories'
- query ?category=category

#### Auth

- register a user => POST '/auth/register'
- update a user => PUT '/auth/update/:id'
- login a user => POST '/auth/login'
- logout a user => DELETE '/auth/logout'
- delete a user => DELETE '/auth/delete'

### Controllers

- authController
- productsController

## Front-end

### Routes

- path="/" => Landing page
- path="/shop" => Shop
- path="/shop/:category" => Category Shop
- path="/cart" => Cart
- path="/product/:product_id" => Product Display Page
- path="/profile" => Profile Page
