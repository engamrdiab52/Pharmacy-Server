const express = require('express')
const router = express.Router()

const {
    getMedicines,
    getMedicine_cat_1,
    getMedicine_cat_2,
    getMedicine_cat_3,
    getMedicine_cat_4,
    getAccessories,
    getHealth,
    getBeauty,
    getFavorites,
    getCartItems,
    getHomeScreenItems,
    getPersonal
} = require('../controllers/products')
//Medicine
router.route('/medicine').get(getMedicines)
router.route('/medicine_cat_1').get(getMedicine_cat_1)
router.route('/medicine_cat_2').get(getMedicine_cat_2)
router.route('/medicine_cat_3').get(getMedicine_cat_3)
router.route('/medicine_cat_4').get(getMedicine_cat_4)
//----------------------------------------------------------
router.route('/accessories').get(getAccessories)
router.route('/health').get(getHealth)
router.route('/beauty').get(getBeauty)
router.route('/favorites').get(getFavorites)
router.route('/cartItems').get(getCartItems)
router.route('/homeScreenItems').get(getHomeScreenItems)
router.route('/personal').get(getPersonal)

module.exports = router