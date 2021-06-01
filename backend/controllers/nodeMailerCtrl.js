require('dotenv').config();
const nodemailer = require('nodemailer');

const { NODEMAILER_USER, NODEMAILER_PASSWORD } = process.env;

module.exports = {
  sendEmail: (req, res) => {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: NODEMAILER_USER,
      to: `${email}`,
      subject: `${name}`,
      text: `${message}`,
      replyTo: `${email}`,
    };

    transporter.sendMail(mailOptions, function (err, res) {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        console.log('here is the res: ', res);
      }
    });
    res.sendStatus(200);
  },
};
