const Competitor=require('../models/competitor.model');
require('../mongo').connect();

function postCompetitor(rq, res) {
    const competitor = new Competitor(rq.body)
    competitor.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(competitor);
        console.log('competitor created successfully!');
    })
}


function putCompetitor(rq, res) {
    const id = rq.body._id;

    const promise = Competitor.findByIdAndUpdate(id, rq.body, { new: true });

    promise.then((competitor) => {
        if (!checkFound(res, competitor)) return;
        res.json(competitor);
        console.log("competitor updated successfully!")
    }).catch((error) => {
        checkServerError(res, error);
    });
}

function deleteCompetitor(rq, res) {

    const promise = Competitor.findByIdAndUpdate(rq.params.competitorId, { $set: { 'IsDeleted': true } }, { new: false })
    promise.then((competitor) => {
        if (!checkFound(res, competitor)) return;
        res.json(competitor);
        console.log('competitor updated successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}

function getCompetitor(rq, res) {
    const docquery = Competitor.find({ 'IsDeleted': false });
    docquery
        .exec()
        .then(competitor => {
            res.status(200).json(competitor);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });
}

function getCompetitorById(rq,res){
    const id = rq.params.competitorId;       
    const o_id = new ObjectId(id);

    const doQuery=Competitor.findById(o_id)

    doQuery
    .exec()
    .then(competitor => {
        res.status(200).json(competitor);
    })
    .catch(error => {
        res.status(500).json(error);
        return;
    });
}

function getCompetitorByTitle(rq, res) {
    var regex = new RegExp(rq.params.title, 'i')

    const doQuery = Competitor.find({
        $and: [{ IsDeleted: 'false' },
        { 'Title': regex }]
    });
    doQuery
        .exec()
        .then(competitor => {
            res.status(200).json(competitor);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });

}



function checkFound(res, product) {
    if (!product) {
        res.status(404).json({
            status: false,
            message: 'Product not found!'
        });
        return;
    }
    return product;
}


function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
        return error;
    }
}

module.exports = {
    postCompetitor,
    putCompetitor,
    getCompetitor,
    getCompetitorById,
    getCompetitorByTitle,
    deleteCompetitor
}
