const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
Type
Default
Unique
Require
*/

const SeedSchema = new Schema({
    GroupCode: {
        type: String,
        require: true,
        maxlength: [26, '{PATH} alanı maksimum {MAXLENGTH} karakter olabilir.({VALUE})'],
        minlength: [2, '{PATH} alanı minimum {MINLENGTH} karakter olabilir.({VALUE})']
    },
    Title: {
        type: String,
        require: true,
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
    Seasons:[],
    TableObservationHeadId:Schema.Types.ObjectId,
    FormObservationHeadId:Schema.Types.ObjectId,
    ProductDetail: [{
        Title: {
            type: String,
            require: true
        },
        TableObservationHeadId:Schema.Types.ObjectId,
        FormObservationHeadId:Schema.Types.ObjectId,
        Variant: [{
            Title: {
                type: String,
                require: true
            },
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
            ENumber: {
                type: String,
            },
            AGCode: {
                type: String
            },
            TrialYear:{
                type: String
            },
            Seasons:[{
                Season:String,
                Region:String,
                Status:String
            }]
        }]
        ,
        IsDeleted: {
            type: Boolean,
            default: false
        },
        IsActive: {
            type: Boolean,
            default: true
        },
       Seasons:[]
    }]

}, {
        collection: 'Seeds'
    });

const Seed = mongoose.model('Seed', SeedSchema)

module.exports = Seed;