const mongoose = require('mongoose')

const MedicineSchema = new mongoose.Schema({
    name_en_Medicine: {
        type: String,
        trim: true
    },
    id_medicine: {
        type: String,
        default: ''
    },
    code_medicine: {
        type: Number,
        default: 0
    },
    name_ar_Medicine: {
        type: String,
        trim: true,
        default: ''
    }, medicine_image_url: {
        type: String,
        trim: true,
        default: ''
    }, price_medicine: {
        type: String,
        trim: true,
        default: ''
    }, offer_on_medicine: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('Medicine', MedicineSchema)