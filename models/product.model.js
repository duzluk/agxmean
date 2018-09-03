const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
Type
Default
Unique
Require
*/

const ProductSchema = new Schema({
    Code: {
        type: String,
        require: true,
        maxlength: 21
    },
    Title: {
        type: String,
        maxlength: [201, '{PATH} alanı maksimum {MAXLENGTH} karakter olabilir.({VALUE})'],
        minlength: [2, '{PATH} alanı minimum {MINLENGTH} karakter olabilir.({VALUE})']
    },
    IsDeleted: {
        type: Boolean,
        default: false
    },
    IsActive: {
        type: Boolean,
        default: true
    },
    CategoryId:{
        type: String,
        required : true
    }
}, {
        collection: 'Products'
    });

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;