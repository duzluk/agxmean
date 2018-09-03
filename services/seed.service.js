const Seed = require('../models/seed.model');
require('../mongo').connect();


function postCategory(rq, res) {
    const product = new Seed(rq.body)
    product.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(product);
        console.log('product created successfully!');
    })
}

function putCategory(rq, res) {
    const id = rq.body._id;

    const promise = Seed.findByIdAndUpdate(id, rq.body, { new: true });

    promise.then((product) => {
        if (!checkFound(res, product)) return;
        res.json(product);
        console.log("product updated successfully!")
    }).catch((error) => {
        checkServerError(res, error);
    });
}

function deleteCategory(rq, res) {

    console.log("silme")
    const id = rq.params.seedId;
    console.log(id)
    const promise = Seed.findByIdAndUpdate(rq.params.seedId, { $set: { 'IsDeleted': true } }, { new: false })
    promise.then((product) => {
        if (!checkFound(res, product)) return;
        res.json(product);
        console.log('product updated successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}

function getCategories(rq, res) {
    // const docquery=Seed.find({'IsDeleted':false},{'ProductDetail': {$elemMatch: { 'IsDeleted': false }}});

    const docquery = Seed.find({ 'IsDeleted': false });
    docquery
        .exec()
        .then(seeds => {
            res.status(200).json(seeds);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });
}

function getCategoryById(rq,res){
    const id = rq.params.CategoryId;       
    const o_id = new ObjectId(id);

    const doQuery=Seed.findById({"_id":o_id})

    doQuery
    .exec()
    .then(seeds => {
        res.status(200).json(seeds);
    })
    .catch(error => {
        res.status(500).json(error);
        return;
    });
}

function getCategoriesByTitle(rq, res) {
    console.log(rq.params.title)
    var regex = new RegExp(rq.params.title, 'i')

    const doQuery = Seed.find({
        $and: [{ IsDeleted: 'false' },
        { 'Title': regex }]
    });


    doQuery
        .exec()
        .then(seeds => {
            res.status(200).json(seeds);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });
}

function getCategoriesByObservationHeadId(rq, res) {
    const doQuery = Seed.find({
        $and: [
            { ObservationHeadId: rq.params.observationHeadId },
            { IsDeleted: 'false' }
        ]
    })

    doQuery
        .exec()
        .then(seeds=>{
            res.status(200).json(seeds);
        })
        .catch(error=>{
            res.status(500).json(error);
            return;
        })
}

function getProducts(rq, res) {
    // const docquery=Seed.find({'IsDeleted':false},{'ProductDetail': {$elemMatch: { 'IsDeleted': false }}});

    const docquery = Seed.aggregate([
        { $unwind: '$ProductDetail' },
        { $match: { 'IsDeleted': false } },
        { $match: { 'ProductDetail.IsDeleted': false } }
    ]);
    docquery
        .exec()
        .then(seeds => {
            res.status(200).json(seeds);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });
}

function deleteProduct(rq, res) {


    const productId = rq.params.productId;
    const promise = Seed.update({ 'ProductDetail._id': productId }, { $set: { "ProductDetail.$.IsDeleted": true } }, { new: false })
    promise.then((product) => {
        if (!checkFound(res, product)) return;
        res.json(product);
        console.log('product updated successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}
function putProduct(rq, res) {
    const productId = rq.body._id;

    promise = Seed.update({ 'ProductDetail._id': productId }, { $set: { "ProductDetail.$": rq.body } }, { new: false });
    promise.then((product) => {
        if (!checkFound(res, product)) return;
        res.json(product);
        console.log('product updated successfully!');
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
    postCategory,
    putCategory,
    deleteCategory,
    getCategories,
    getCategoriesByTitle,
    getCategoryById,
    getCategoriesByObservationHeadId,
    getProducts,
    deleteProduct,
    putProduct
}


// function postProduct(rq,res){
//     const categoryId=rq.params.categoryId
//     const promise=Seed.update({"_id" : categoryId},
//     {$push:{Products:{
//         Title:rq.body.Title,
//         Variant:rq.body.Variant,
//         MainUnit:rq.body.MainUnit,
//         ConvFact1:rq.body.ConvFact1,
//         SeconUnit:rq.body.SeconUnit,
//         ConvFact2:rq.body.ConvFact2,
//     }}})
//     promise.then((seed)=>{
//         if (!checkFound(res, seed)) return;
//         res.json(seed);
//         console.log("Seed Card updated successfully!")
//     }).catch((error) => {
//         checkServerError(res, error);
//     });
// }

// function putProduct(rq,res){

//     const promise=Seed.updateOne({"Products._id" : rq.body._id},
//         { $set :{
//             "Products.$.Title":rq.body.Title,
//             "Products.$.Variant":rq.body.Variant,
//             "Products.$.MainUnit":rq.body.MainUnit,
//             "Products.$.ConvFact1":rq.body.ConvFact1,
//             "Products.$.SeconUnit":rq.body.SeconUnit,
//             "Products.$.ConvFact2":rq.body.ConvFact2,
//         }})
//     promise.then((product)=>{
//         if (!checkFound(res, product)) return;
//         res.json(product);
//         console.log("Seed Card updated successfully!")
//     }).catch((error) => {
//         checkServerError(res, error);
//     });

// }
/*
function getProducts(rq,res){
    
    const docquery=Product.find({ });

    docquery
        .exec()
        .then(products=>{
            res.status(200).json(products);
        })
        .catch(error=>{
            res.status(500).json(error);
            return;
        });       
}
*/