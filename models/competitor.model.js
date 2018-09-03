const mongoose = require('mongoose');
const Schema = mongoose.Schema;

CompetitorSchema = new Schema({
    Incharge: {
        type: String,
        required: true
    },
    Incharge2: {
        type: String,
        required: true
    },
    Incharge3: {
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

    Region: String,
    IsActive: {
        type: Boolean,
        default: true
    },
    IsDeleted: {
        type: Boolean,
        default: false
    },
    Products: [{
        SeedId: Schema.Types.ObjectId,
        CategoryTitle: String,
        ProductId: Schema.Types.ObjectId,
        ProductTitle: String,
        Title: String,
        Detail: [{
            Season: String,
            Region: String,
            Percent: Number,
            Trend: Number
        }]
    }]
},
    {
        collection: 'Competitors'
    });

const Competitor = mongoose.model('Competitor', CompetitorSchema);

module.exports = Competitor;