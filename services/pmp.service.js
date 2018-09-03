const Pmp = require('../models/pmp.model');
require('../mongo').connect();

function postPmp(rq, res) {
    const pmp = new Pmp(rq.body);
    pmp.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(pmp);
        console.log('ProductMarketProfile created successfully!');
    })
}

function putPmp(rq, res) {
    console.log("geldi",rq.body._id)
    const promise = Pmp.findByIdAndUpdate(rq.body._id, rq.body, { new: true });
    promise.then((pmp) => {
        if (!checkFound(res, pmp)) return;
        res.json(pmp);
        console.log("ProductMarketProfile updated successfully!")
    }).catch((error) => {
        checkServerError(res, error);
    });
}


function deletePmp(rq, res) {
    const promise = Pmp.findByIdAndRemove(rq.params.pmpId);
    promise.then((pmp) => {
        if (!checkFound(res, pmp)) return;
        res.json(pmp);
        console.log('pmp deleted successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}


function getPmpByFilter(rq, res) {

    let response = [];
    const { CategoryId, ProductId, Region, TrialSeason, TrialYear } = rq.query;

    parameter=        {
        name: 'ProductId',
        value: ProductId
    }
    const pmpFind = (query) => {

        return new Promise((resolve, reject) => {
            if (parameter.name == 'ProductId' && parameter.value != undefined) {

                Pmp.find({ ProductId: parameter.value })
                    .then(pmp => {
                        resolve(pmp);
                    })
            }
            else {
                Pmp.find({})
                    .then(pmp => {
                        resolve(pmp)
                    })
            }
        })
    }

    pmpFind(parameter)
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
            if (TrialYear != undefined) {
                console.log('TrialYear', TrialYear)
                response = response.filter(r => r.TrialYear == TrialYear);
                return response;
            }
            else return data;
        })
        .then((data)=>{
            if(CategoryId!=undefined){
                console.log('SeedId',CategoryId);
                response=response.filter(r=>r.SeedId==CategoryId);
                res.status(200).json(response);
            }
            else res.status(200).json(data);
        })
}




function checkFound(res, pmp) {
    if (!pmp) {
        res.status(404).json({
            status: false,
            message: 'ProductMarketProfile not found!'
        });
        return;
    }
    return pmp;
}


function checkServerError(res, error) {
    if (error) {
        if (error.code == 11000) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
        else
            res.status(500).send(error);
        return error;
    }
}

module.exports = {
    postPmp,
    putPmp,
    getPmpByFilter,
    deletePmp
}