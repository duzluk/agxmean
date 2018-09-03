const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObservationHeadSchema = new Schema({
    Code: { type: String, required: true, unique: true },
    Name: String,
    IsActive: {
        type: Boolean,
        default: true
    },
    Place:{
        type:String,
        enum:['table','form'],
        default:'table'
    },
    IsDeleted: {
        type: Boolean,
        default: false
    },
    GenericFields: [{
        Type: String,
        Caption: {
            type: String
        },
        Value: Schema.Types.Mixed,
        Options: [],    
        IsActive: {
            type: Boolean,
            default: true
        },
        IsDeleted: {
            type: Boolean,
            default: false
        }
    }]
}, {
        collection: 'ObservationHeads'
    });

const ObservationHead = mongoose.model('ObservationHead', ObservationHeadSchema);

module.exports = ObservationHead;