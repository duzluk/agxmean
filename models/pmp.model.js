const mongoose = require('mongoose');
const Schema = mongoose.Schema;

ProductMarketProfileSchema = new Schema({
    SeedId: String,
    CategoryTitle: String,
    ProductId: String,
    ProductTitle: String,
    TrialSeason: String,
    TrialYear:String,
    Region: String,
    VariantDetail: [{
        VariantId: String,
        VariantTitle: String,
        Status: String,
        Result: String,
        SeedOrder: Number,
        ProposedForNextSeason: String
    }],
    Comerical: [{
            VariantId: String,
            VariantTitle: String,
            Rate: Number,
            Trend: Number,
        }],
    Competitor: [{
            CompetitorId: String,
            CompetitorTitle: String,
            CompetitorProductId: String,
            CompetitorProductTitle: String,
            Rate: Number,
            Trend: Number,
        }],

    MarketInformation: {
        MarketSize: Number,
        Baf: Number,
        Pack: Number,
        MarketValue: Number,
    }

},
{
    collection: 'ProductMarketProfiles'
});

const ProductMarketProfile = mongoose.model('ProductMarketProfile', ProductMarketProfileSchema);

module.exports = ProductMarketProfile;