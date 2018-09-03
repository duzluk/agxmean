const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrowerSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Address: String,
    Country: String,
    City: String,
    District: String,
    EMail: {
        type: String
    },
    Gsm: {
        type: String
    },
    TelNrs1: {
        type: String
    },
    TelNrs2: {
        type: String
    },

    FormOfProduct:String,
    TrCode:String,
    Region:String,
    IsActive: {
        type: Boolean,
        default: true
    },
    IsDelete: {
        type: Boolean,
        default: false
    },
    Persons: [],
    Variants: []
},
    {
        collection: 'Growers'
    });

const Grower = mongoose.model('Grower', GrowerSchema);

module.exports = Grower;
