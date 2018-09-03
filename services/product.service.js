const Product = require('../models/product.model');
require('../mongo').connect();


function postProduct(rq, res) {
    const product = new Product(rq.body)
    product.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(product);
        console.log('product created successfully!');
    })
}

function putProduct(rq, res) {
    const promise = Product.findByIdAndUpdate(rq.body._id,rq.body, { new: true });

    promise.then((product) => {
        if (!checkFound(res, product)) return;
        res.json(product);
        console.log("product updated successfully!")
    }).catch((error) => {
        checkServerError(res, error);
    });
}

function getProducts(rq, res) {
    const docquery = Product.find({ 'IsDeleted' : false });

    docquery
        .exec()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });
}
function getProductsByCatId(rq, res) {
    const categoryId = rq.params.categoryId;
    const docquery = Product.find({ 'CategoryId': categoryId });
    docquery
        .exec()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });
}


function getProductsByTitle(rq, res) {
    
    const regex = new RegExp(rq.params.title, 'i')
    const categoryId=rq.params.categoryId

    const doQuery = Product.find(
        {$and : [  { CategoryId : categoryId },
        {'$or': [{
            'Code': regex
        }, {
            'Title': regex
        }] }  ] });

    doQuery
        .exec()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });
}


function deleteProduct(rq,res){
    const promise=Product.findByIdAndRemove(rq.params.productId);
    
    promise.then((product)=>{
        if(!checkFound(res,product)) return;
            res.json(product);
            console.log('product deleted successfully!');
    }).catch((error)=>{
        checkServerError(res,error);
    })
}

function deleteProductByCategoryId(rq,res){
    console.log(rq.params.categoryId);
    const promise=Product.update({ 'CategoryId':rq.params.categoryId },{$set:{'IsDeleted':true}},{ new:false, multi:true })
    promise.then((product)=>{
        if(!checkFound(res,product)) return;
            res.json(product);
            console.log('product updated successfully!');
    }).catch((error)=>{
        checkServerError(res,error);
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
    postProduct,
    putProduct,
    getProducts,
    getProductsByCatId,
    getProductsByTitle,
    deleteProduct,
    deleteProductByCategoryId
}