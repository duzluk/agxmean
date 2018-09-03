const SeedTrial = require('../models/seedtrial.model');
ObjectId = require('mongodb').ObjectID;

require('../mongo').connect();

function getTrial(rq, res) {

    const doQuery = SeedTrial.find({})

    doQuery.exec()
        .then(trial => {
            res.status(200).json(trial);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        })
}

function getTrialFilter(rq, res) {

    let response = [];
    const { VariantId, Region, Responsible, TrialSeason, Status,ProductId} = rq.query;

    const seedFind = (query) => {

        return new Promise((resolve, reject) => {
            if (parameter.name == 'Responsible' && parameter.value != undefined) {
                
                SeedTrial.find({ Responsible: { $in: parameter.value.split(',') } })
                    .then(trial => {
                        resolve(trial)
                        
                    })
            }
            else
            {
                SeedTrial.find({ })
                .then(trial => {
                    resolve(trial)
                })
            }
        })
    }

parameter=        {
    name: 'Responsible',
    value: Responsible
}

    seedFind(parameter)
        .then((data) => {
            response = data;
            return response
        })
        .then((data) => {
            if (Region != undefined) {
                console.log('Region', Region);
                response = data.filter(r => r.Region == Region);
                return response;
            }
            else return data;
        })
        .then((data) => {
            if (TrialSeason != undefined) {
                console.log('TrialSeason', TrialSeason)
                response = response.filter(r => r.TrialSeason == TrialSeason);
                return response;
            }
            else return data;
        })
        .then((data)=>{
            if (VariantId != undefined) {
                console.log('VariantId', VariantId)
                response = response.filter(r => r.VariantId == VariantId);
                return response;
            }
            else return data;
        })
        .then((data)=>{
            if(Status!=undefined){
                console.log('Status',Status);
                response=response.filter(r=>r.Status==Status);
                return response;
            }
            else return data;
        })
        .then((data)=>{
            if(ProductId!=undefined){
                console.log('ProductId',ProductId);
                response=response.filter(r=>r.ProductId==ProductId);
                res.status(200).json(response);
            }
            else res.status(200).json(data);
        });
};





function getTrialByCategoryId(rq, res) {

    const doQuery = SeedTrial.find({ 'CategoryId': rq.params.categoryId })

    doQuery.exec()
        .then(trial => {
            res.status(200).json(trial);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        })

}


function postSeedTrial(rq, res) {
    const seedtrial = new SeedTrial(rq.body)
    seedtrial.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(seedtrial);
        console.log('SeedTrial created successfully!');
    })
}

function putSeedTrial(rq, res) {
    const promise = SeedTrial.findByIdAndUpdate(rq.body._id, rq.body, { new: true });

    promise.then((seedtrial) => {
        if (!checkFound(res, seedtrial)) return;
        res.json(seedtrial);
        console.log("SeedTrial updated successfully!")
    }).catch((error) => {
        checkServerError(res, error);
    });
}

function deleteSeedTrial(rq, res) {
    const promise = SeedTrial.findByIdAndRemove(rq.params.seedTrialId);

    promise.then((seedtrial) => {
        if (!checkFound(res, seedtrial)) return;
        res.json(seedtrial);
        console.log('SeedTrial deleted successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
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
    getTrial,
    getTrialByCategoryId,
    postSeedTrial,
    putSeedTrial,
    deleteSeedTrial,
    getTrialFilter
}