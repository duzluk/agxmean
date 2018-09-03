const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeedObservationSchema = new Schema({

    SeedId: Schema.Types.ObjectId,
    ProductDetailId: Schema.Types.ObjectId,
    VariantId: Schema.Types.ObjectId,
    Region: String,
    PersonId: Schema.Types.ObjectId,
    GrowerId: Schema.Types.ObjectId,
    ObservationLine: [],// ObservationLine[];
    Form: {}

},
    {
        collection: 'SeedObservations'
    })

const SeedObservation = mongoose.model('SeedObservation', SeedObservationSchema);

module.exports = SeedObservation;
