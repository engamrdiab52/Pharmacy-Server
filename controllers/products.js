const Medicine = require('../models/Medicine')


const getMedicines = async (req, res) =>{
    try {
        const medicine = await Medicine.find({})
        res.status(200).json({success: true, data : {medicine}})
    } catch (error) {
        console.log(error);
        res.send(error)
    }
  
}

const getAccessories = (req, res) =>{
    res.status(200).json({success: true, data : "Accessories"})
}

const getPersonal = (req, res) =>{
    res.status(200).json({success: true, data : "Personal"})
}

const getHomeScreenItems = (req, res) =>{
    res.status(200).json({success: true, data : "HomeScreenItems"})
}

const getCartItems = (req, res) =>{
    res.status(200).json({success: true, data : "CartItems"})
}

const getFavorites = (req, res) =>{
    res.status(200).json({success: true, data : "Favorites"})
}

const getBeauty = (req, res) =>{
    res.status(200).json({success: true, data : "Beauty"})
}

const getHealth = (req, res) =>{
    res.status(200).json({success: true, data : "Health"})
}

module.exports = {
    getMedicines,
     getAccessories,
     getHealth,
     getBeauty,
     getFavorites,
     getCartItems,
     getHomeScreenItems,
     getPersonal
}
 