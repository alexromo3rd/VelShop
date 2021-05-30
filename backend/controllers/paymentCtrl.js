require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

module.exports = {
  submitPayment: async (req, res) => {
    const { id, amount } = req.body;

    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'USD',
        description: 'Vel Shop',
        payment_method: id,
        confirm: true,
      });

      res.status(200).send({ message: 'Payment successful', success: true });
    } catch (error) {
      console.log('Error', error);
      res.status(400).send({ message: 'Payment failed', success: false });
    }
  },
};
