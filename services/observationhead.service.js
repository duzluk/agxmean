const ObservationHead = require('../models/observationhead.model');
require('../mongo').connect();


function postObservationHead(rq, res) {
    const oh = new ObservationHead(rq.body)

    oh.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(oh);
        console.log('observation head created successfully!');
    })
}

function putObservationHead(rq, res) {
    const promise = ObservationHead.findByIdAndUpdate(rq.body._id, rq.body, { new: true });

    promise.then((oh) => {
        if (!checkFound(res, oh)) return;
        res.json(oh);
        console.log('generic.field updated successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}

function getObservationHeads(rq, res) {
    const docQuery = ObservationHead.find({ IsDeleted: 'false' });

    docQuery
        .exec()
        .then(oh => {
            res.status(200).json(oh);
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

function getObservationHeadById(rq, res) {
    const docQuery = ObservationHead.findById(rq.params.observationHeadId);

    docQuery
        .exec()
        .then(oh => {
            res.status(200).json(oh);
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

function deleteObservationHead(rq, res) {

    const promise = ObservationHead.findByIdAndUpdate(rq.params.observationHeadId,{IsDeleted:true});

    promise.then((oh) => {
        if (!checkFound(res, oh)) return;
        res.json(oh);
        console.log('generic.field deleted successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}

function checkFound(res, oh) {
    if (!oh) {
        res.status(404).json({
            status: false,
            message: 'generic.field not found!'
        });
        return;
    }
    return oh;
}


function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
        return error;
    }
}

module.exports = {
    postObservationHead,
    putObservationHead,
    getObservationHeads,
    getObservationHeadById,
    deleteObservationHead
}