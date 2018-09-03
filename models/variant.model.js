const moongose = require('mongoose');
const Schema = moongose.Schema;

const VariantSchema = new Schema({
    Code: {
        type: String,
        require: true
    },
    Title: String,
    MainUnit: String,
    SecondUnit: String,
    ConvFact1: {
        type: Number,
        default: 1
    },
    ConvFact2: {
        type: Number,
        default: 1
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
    },
    ProductId:{
        type: String,
        required : true
    }
}, { collection: 'Variants' });

const Variant = moongose.model('Variant', VariantSchema);

module.exports = Variant;

