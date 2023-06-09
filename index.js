const express = require('express');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const app = express();
const port = 3000;

// API endpoint to send emails
app.post('/send-mail', (req, res) => {
  const { email, subject, message } = req.body;

  const msg = {
    to: email,
    from: 'youssifayman2004@gmail.com',
    subject,
    html: `<strong>${message}</strong>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
