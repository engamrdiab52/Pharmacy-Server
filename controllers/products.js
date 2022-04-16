const { Medicine, Medicine_cat_1, Medicine_cat_2 } = require('../models/Medicine')
const { StatusCodes } = require('http-status-codes')
const { NotFoundError, BadRequestError } = require('../errors')
//Medicine
const getMedicines = async (req, res) => {
    const medicine = await Medicine.find({})
    res.status(StatusCodes.OK).json({ count: medicine.length, success: true, data: { medicine } })
}

const getMedicine_cat_1 = async (req, res) => {
    const medicine_cat_1 = await Medicine_cat_1.find({})
    res.status(StatusCodes.OK).json({ success: true, data: { medicine_cat_1 } })
}

const getMedicine_cat_2 = async (req, res) => {
    const medicine_cat_2 = await Medicine_cat_2.find({})
    res.status(StatusCodes.OK).json({ success: true, data: { medicine_cat_2 } })
}

const getMedicine_cat_3 = async (req, res) => {
    const medicine_cat_3 = await Medicine_cat_3.find({})
    res.status(StatusCodes.OK).json({ success: true, data: { medicine_cat_3 } })
}

const getMedicine_cat_4 = async (req, res) => {
    const medicine_cat_4 = await Medicine_cat_4.find({})
    res.status(StatusCodes.OK).json({ success: true, data: { medicine_cat_4 } })
}
//----------------------------------------------------------------------

const getAccessories = async (req, res) => {
    const medicine_cat_1 = await Medicine_cat_1.find({})
    res.status(StatusCodes.OK).json({ success: true, data: { medicine_cat_1 } })
}

const getPersonal = (req, res) => {
    res.status(200).json({ success: true, data: "Personal" })
}

const getHomeScreenItems = (req, res) => {
    res.status(200).json({ success: true, data: "HomeScreenItems" })
}

const getCartItems = (req, res) => {
    res.status(200).json({ success: true, data: "CartItems" })
}

const getFavorites = (req, res) => {
    res.status(200).json({ success: true, data: "Favorites" })
}

const getBeauty = (req, res) => {
    res.status(200).json({ success: true, data: "Beauty" })
}

const getHealth = (req, res) => {
    res.status(200).json({ success: true, data: "Health" })
}

module.exports = {
    getMedicines, getMedicine_cat_1, getMedicine_cat_2, getMedicine_cat_3, getMedicine_cat_4,
    getAccessories,
    getHealth,
    getBeauty,
    getFavorites,
    getCartItems,
    getHomeScreenItems,
    getPersonal
}
