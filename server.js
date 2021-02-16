const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.post('/create-billing-intent', async (req, res) => {
	const { amount } = req.body;

	const paymentIntent = await stripe.paymentIntents.create({
		amount: amount * 100,
		currency: 'usd',
	});

	res.send({
		clientSecret: paymentIntent.client_secret
	});
});

app.listen(port, error => {
	if (error) throw error;
	console.log('Server running on port ' + port);
});
