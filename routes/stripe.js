const express = require('express')
const router = express.Router()
const {config, createPaymentIntent} = require('../controllers/stripe')

router.get('/config', config)
router.post('/create-payment-intent', createPaymentIntent)

module.exports = router