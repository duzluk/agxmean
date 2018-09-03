const GenericField = require('../models/generic.field.model');
require('../mongo').connect();


function postGenericField(rq, res) {
    const gf = new GenericField(rq.body)

    gf.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(gf);
        console.log('generic.field created successfully!');
    })
}

function putGenericField(rq, res) {
    const promise = GenericField.findByIdAndUpdate(rq.body._id, rq.body, { new: true });

    promise.then((gf) => {
        if (!checkFound(res, gf)) return;
        res.json(gf);
        console.log('generic.field updated successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}

function getGenericFields(rq, res) {
    const docQuery = GenericField.find({ IsDeleted: 'false' });

    docQuery
        .exec()
        .then(gf => {
            res.status(200).json(gf);
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

function getGenericFieldsByGroupCode(rq, res) {
    console.log(rq.params.groupCode);
    const docQuery = GenericField.find({ IsDeleted: 'false', SeedGroupCode: rq.params.groupCode });

    docQuery
        .exec()
        .then(gf => {
            res.status(200).json(gf);
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

function deleteGenericField(rq, res) {

    const promise = GenericField.findByIdAndRemove(rq.params.genericFieldId);

    promise.then((gf) => {
        if (!checkFound(res, gf)) return;
        res.json(gf);
        console.log('generic.field deleted successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}

function checkFound(res, gf) {
    if (!gf) {
        res.status(404).json({
            status: false,
            message: 'generic.field not found!'
        });
        return;
    }
    return gf;
}


function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
        return error;
    }
}

module.exports = {
    postGenericField,
    putGenericField,
    getGenericFields,
    getGenericFieldsByGroupCode,
    deleteGenericField
}