const Observation = require('../models/seedobservation.model');
require('../mongo').connect();

function postObservation(rq, res) {
    const observation = new Observation(rq.body)
    console.log(rq.body);
    observation.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(observation);
        console.log('observation  created successfully!');
    })
}

function putObservation(rq, res) {
    const promise = Observation.findByIdAndUpdate(rq.body._id, rq.body, { new: true });
    console.log(rq.body);
    promise.then((observation) => {
        if (!checkFound(res, observation)) return;
        res.json(observation);
        console.log('generic.field updated successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}


function deleteObservation(rq, res) {

    const promise = ObservationHead.findByIdAndRemove(rq.params.observationId);

    promise.then((observation) => {
        if (!checkFound(res, observation)) return;
        res.json(observation);
        console.log('generic.field deleted successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}

function getObservationsBySeed(rq, res) {
    const docQuery = Observation.find({ SeedId: rq.params.seedId, ProductDetailId: rq.params.productDetailId, VariantId: rq.params.variantId });

    docQuery
        .exec()
        .then(observation => {
            res.status(200).json(observation);
        })
        .catch(error => {
            res.status(500).json(error)
        })
}


function checkFound(res, observation) {
    if (!observation) {
        res.status(404).json({
            status: false,
            message: 'generic.field not found!'
        });
        return;
    }
    return observation;
}


function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
        return error;
    }
}

module.exports = {
    postObservation,
    putObservation,
    getObservationsBySeed,
    // getObservationById,
    deleteObservation
}