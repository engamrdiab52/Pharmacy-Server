const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const config = (req, res)=>{
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    });
}
const calculateOrderAmount = (items) => {
    //const {money} = items
    // console.log(items.money);
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 7000;
}
const createPaymentIntent = async (req, res) =>{
    const { items } = req.body;
    console.log({ items });
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        }
    })

    res.send({
        clientSecret: paymentIntent.client_secret,
    })
    console.log(paymentIntent.client_secret);
}

module.exports = {
    config, 
    createPaymentIntent
}