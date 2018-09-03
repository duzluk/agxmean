const Variant=require('../models/variant.model');
require('../mongo').connect();


function postVariant(rq,res){


    const variant=new Variant(rq.body)
    
    variant.save((error)=>{
        if(checkServerError(res,error)) return;
        res.status(201).json(variant);
        console.log('variant created successfully!');
    })
}

function putVariant(rq,res){
    const variant =new Variant(rq.body);
    const promise = Variant.findByIdAndUpdate(rq.body._id,rq.body, { new: true });
    promise.then((variant) => {
        if (!checkFound(res, variant)) return;
        res.json(variant);
        console.log("variant updated successfully!")
    }).catch((error) => {
        checkServerError(res, error);
    });
}

function getVariants(rq,res){
    const docquery=Variant.find({ });

    docquery
        .exec()
        .then(variants=>{
            res.status(200).json(variants);
        })
        .catch(error=>{
            res.status(500).json(error);
            return;
        });       
}

function getVariantsByProductId(rq,res){

    const docquery=Variant.find({ 'ProductId' : rq.params.productId });

    docquery
        .exec()
        .then(variants=>{
            res.status(200).json(variants);
        })
        .catch(error=>{
            res.status(500).json(error);
            return;
        });       
}


function getVariantsByTitle(rq, res) {
    
    const regex = new RegExp(rq.params.title, 'i')
    const productId=rq.params.productId
    console.log(regex+ ' ' +productId)
    const doQuery = Variant.find(
        {$and : [  { ProductId : productId },
            {'$or': [{
                'Code': regex
            }, {
                'Title': regex
            }] }  ] });
    doQuery
        .exec()
        .then(variants => {
            res.status(200).json(variants);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });
}


function deleteVariant(rq,res){
    const promise=Variant.findByIdAndRemove(rq.params.variantId);
    
    promise.then((variant)=>{
        if(!checkFound(res,variant)) return;
            res.json(variant);
            console.log('variant deleted successfully!');
    }).catch((error)=>{
        checkServerError(res,error);
    })
}


function deleteVariantByCategoryId(rq,res){

    const promise=Variant.update({ 'CategoryId':rq.params.categoryId },{$set:{'IsDeleted':true}},{ new:false, multi:true })
    promise.then((variant)=>{
        if(!checkFound(res,variant)) return;
            res.json(variant);
            console.log('variant updated successfully!');
    }).catch((error)=>{
        checkServerError(res,error);
    })
}

function deleteVariantByProductId(rq,res){

    const promise=Variant.update({ 'CategoryId':rq.params.productId },{$set:{'IsDeleted':true}},{ new:false, multi:true })
    promise.then((variant)=>{
        if(!checkFound(res,variant)) return;
            res.json(variant);
            console.log('variant updated successfully!');
    }).catch((error)=>{
        checkServerError(res,error);
    })
}


function checkFound(res,variant)
{
    if(!variant){
        res.status(404).json({
            status:false,
            message:'variant not found!'
        });
        return;
    }
    return variant;
}


function checkServerError(res,error)
{
    if(error){
        res.status(500).send(error);
    return error;
    }
}

module.exports={
    postVariant,
    putVariant,
    getVariants,
    getVariantsByProductId,
    getVariantsByTitle,
    deleteVariant,
    deleteVariantByCategoryId,
    deleteVariantByProductId
}