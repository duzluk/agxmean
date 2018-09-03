const Hero = require('../models/hero.model');

require('../mongo').connect();

function getHeroes(rq, res) {
    const docquery = Hero.find({});
    docquery
        .exec()
        .then(heroes => {
            res.status(200).json(heroes);
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        });
}
function getHero(rq, res) {
    const code = rq.params.code
    const docQuery = Hero.findOne({ code: code });

    docQuery
        .exec()
        .then(hero => {
            if (!hero) 
                res.status(404).send("Hero not found")
            else
                res.status(200).json(hero);
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        });
}

function postHero(rq, res) {
    const hero = new Hero(rq.body);
    hero.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(hero);
        console.log("hero created successfully!");
    })
}

function putHero(rq, res) {
    const code = rq.params.code;

    const promise = Hero.findOneAndUpdate({ code: code }, rq.body);

    promise.then((hero) => {
        if (!checkFound(res, hero)) return;
        res.json(hero);
        console.log("hero updated successfully!")
    }).catch((error) => {
        checkServerError(res, error);
    });
}

function deleteHero(rq, res) {
    const code = rq.params.code;
    const promise = Hero.findOneAndRemove({ code: code });

    promise.then((hero) => {
        if (!checkFound(res, hero)) return;
        res.json(hero);
        console.log("hero deleted successfully!")
    }).catch((error) => {
        checkServerError(res, error);
    });
}
function checkFound(res, oldHero) {
    if (!oldHero) {
        res.status(404).send('Hero not found!');
        return;
    }
    return oldHero;
}

function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
        return error;
    }
}
module.exports = {
    getHeroes,
    getHero,
    postHero,
    putHero,
    deleteHero
}