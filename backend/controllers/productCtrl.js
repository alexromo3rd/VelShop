module.exports = {
  getAllProducts: async (req, res) => {
    const db = req.app.get('db');

    const products = await db.product.get_all_products();

    if (products.length === 0) {
      res.sendStatus(404)
      return;
    }

    res.status(200).send(products);
  },
  getProduct: async (req, res) => {
    const db = req.app.get('db');
  },
  createProduct: async (req, res) => {
    const db = req.app.get('db');
  },
  getProductCategories: async (req, res) => {
    const db = req.app.get('db');
  },
};
