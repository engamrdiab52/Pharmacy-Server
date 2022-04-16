const mongoose = require('mongoose')

const MedicineSchema = new mongoose.Schema({
    name_en_Medicine: { type: String, trim: true },
    id_medicine: { type: String, default: '' },
    code_medicine: { type: Number, default: 0 },
    name_ar_Medicine: { type: String, trim: true, default: '' },
    img_url_medicine: { type: String, trim: true, default: '' },
    price_medicine: { type: String, trim: true, default: '' },
    offer_on_medicine: { type: String, default: '' },
    alternatives_url_medicine: { type: String, default: '' },
    availability_medicine: { type: Boolean, default: true },
    category_ar_medicine: { type: String, default: '' },
    category_en_medicine: { type: String, default: '' },
    company_name_medicine: { type: String, default: '' },
    description_ar_url_medicine: { type: String, default: '' },
    name_clinical_medicine: { type: String, default: '' }
})

const Medicine = mongoose.model('Medicine', MedicineSchema)
const Medicine_cat_1 =  mongoose.model('Medicine_cat_1', MedicineSchema)
const Medicine_cat_2 =  mongoose.model('Medicine_cat_2', MedicineSchema)
const Medicine_cat_3 =  mongoose.model('Medicine_cat_3', MedicineSchema)
const Medicine_cat_4 =  mongoose.model('Medicine_cat_4', MedicineSchema)
module.exports ={
    Medicine,
    Medicine_cat_1,
    Medicine_cat_2,
    Medicine_cat_3,
    Medicine_cat_4
} 