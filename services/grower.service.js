const Grower=require('../models/grower.model');

require('../mongo').connect();

function postGrower(rq,res){
    const grower=new Grower(rq.body)
    
    grower.save((error)=>{
        if(checkServerError(res,error)) return;
        res.status(201).json(grower);
        console.log('grower created successfully!');
    })
}


function putGrower(rq,res){
    const promise=Grower.findByIdAndUpdate(rq.body._id,rq.body,{new : true});
    
    promise.then((grower)=>{
        if(!checkFound(res,grower)) return;
        res.json(grower);
        console.log('grower updated successfully!');
    }).catch((error)=>{
        checkServerError(res,error);
    })
}

function getGrowers(rq,res){
    const docQuery=Grower.find({ });

    docQuery
        .exec()
        .then(growers=>{
            res.status(200).json(growers);
        })
        .catch(error=>{
            res.status(500).json(error)
        })
}

function deleteGrower(rq,res){
    console.log(rq.params.growerId)

    const promise=Grower.findByIdAndRemove(rq.params.growerId);
    
    promise.then((grower)=>{
        if(!checkFound(res,grower)) return;
            res.json(grower);
            console.log('grower deleted successfully!');
    }).catch((error)=>{
        checkServerError(res,error);
    })
}



function checkFound(res, grower) {
    if (!grower) {
        res.status(404).json({
            status: false,
            message: 'grower not found!'
        });
        return;
    }
    return grower;
}


function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
        return error;
    }
}

module.exports = {
    postGrower,
    putGrower,
    getGrowers,
    deleteGrower
}