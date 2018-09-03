const SeedInput=require('../models/seedinput.model');
require('../mongo').connect();


function geSeedInput(rq,res){
    // const docquery=Seed.find({'IsDeleted':false},{'ProductDetail': {$elemMatch: { 'IsDeleted': false }}});

    const docquery=SeedInput.find({'IsDeleted':false});
    docquery
        .exec()
        .then(seeds=>{
            res.status(200).json(seeds);
        })
        .catch(error=>{
            res.status(500).json(error);
            return;
        });       
}


function getSeedInputByCategoryId(rq,res){

    const docquery=SeedInput.find({'CategoryId':rq.params.categoryId, 'TrCode':rq.params.trcode});
    docquery
        .exec()
        .then(seeds=>{
            res.status(200).json(seeds);
        })
        .catch(error=>{
            res.status(500).json(error);
            return;
        });       
}


function postSeedInput(rq, res) {
    const seedinput = new SeedInput(rq.body)
    seedinput.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(seedinput);
        console.log('SeedInput created successfully!');
    })
}

function putSeedInput(rq, res) {
    const promise = SeedInput.findByIdAndUpdate(rq.body._id, rq.body, { new: true });

    promise.then((seedinput) => {
        if (!checkFound(res, seedinput)) return;
        res.json(seedinput);
        console.log("SeedInput updated successfully!")
    }).catch((error) => {
        checkServerError(res, error);
    });
}

function deleteSeedInput(rq, res) {
    const promise = SeedInput.findByIdAndRemove(rq.params.seedInputId);

    promise.then((seedinput) => {
        if (!checkFound(res, seedinput)) return;
        res.json(seedinput);
        console.log('SeedInput deleted successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}


function checkFound(res,product)
{
    if(!product){
        res.status(404).json({
            status:false,
            message:'Product not found!'
        });
        return;
    }
    return product;
}


function checkServerError(res,error)
{
    if(error){
        res.status(500).send(error);
    return error;
    }
}


module.exports={
    geSeedInput,
    getSeedInputByCategoryId,
    postSeedInput,
    putSeedInput,
    deleteSeedInput
 }