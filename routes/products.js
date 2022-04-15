const express = require('express')
const router = express.Router()

const {
    getMedicines,
    getAccessories,
    getHealth,
    getBeauty,
    getFavorites,
    getCartItems,
    getHomeScreenItems,
    getPersonal
} = require('../controllers/products')

router.route('/medicine').get(getMedicines)
router.route('/accessories').get(getAccessories)
router.route('/health').get(getHealth)
router.route('/beauty').get(getBeauty)
router.route('/favorites').get(getFavorites)
router.route('/cartItems').get(getCartItems)
router.route('/homeScreenItems').get(getHomeScreenItems)
router.route('/personal').get(getPersonal)

module.exports = router