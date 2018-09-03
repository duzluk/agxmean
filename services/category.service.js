const Category = require('../models/category.model');
require('../mongo').connect();

const Product=require('../models/product.model');
const Variant=require('../models/variant.model');

function postCategory(rq, res) {
    const category = new Category(rq.body)
    category.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(category);
        console.log('category created successfully!');
    })
}

function putCategory(rq, res) {
    const promise = Category.findByIdAndUpdate(rq.body._id, rq.body, { new: true });

    promise.then((category) => {
        if (!checkFound(res, category)) return;
        res.json(category);
        console.log("category updated successfully!")
    }).catch((error) => {
        checkServerError(res, error);
    });
}

function getCategories(rq, res) {
    console.log("Deneme")
    const docquery = Category.find({});
    docquery
        .exec()
        .then(categories => {
            res.status(200).json(categories);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });
}

function getCategoriesByTitle(rq, res) {
    console.log(rq.params.title)
    var regex = new RegExp(rq.params.title, 'i')

    const doQuery = Category.find({
        '$or': [{
            'Code': regex
        }, {
            'Title': regex
        }]
    });

    doQuery
        .exec()
        .then(categories => {
            res.status(200).json(categories);
        })
        .catch(error => {
            res.status(500).json(error);
            return;
        });
}

function deleteCategory(rq, res) {
    const promise = Category.findByIdAndRemove(rq.params.categoryId);

    promise.then((category) => {
        if (!checkFound(res, category)) return;
        res.json(category);
        console.log('category deleted successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}


function checkFound(res, category) {
    if (!category) {
        res.status(404).json({
            status: false,
            message: 'Category not found!'
        });
        return;
    }
    return category;
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
    postCategory,
    putCategory,
    getCategories,
    getCategoriesByTitle,
    deleteCategory
}