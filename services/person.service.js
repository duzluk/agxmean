const Person = require('../models/person.model');
const User = require('../models/user.model');
const UserService = require('./user.service');
ObjectId = require('mongodb').ObjectID;

require('../mongo').connect();

function postPerson(rq, res) {
    const person = new Person(rq.body)

    person.save((error) => {
        if (checkServerError(res, error)) return;
        res.status(201).json(person);
        console.log('person created successfully!');
    })
}

function putPerson(rq, res) {
    const promise = Person.findByIdAndUpdate(rq.body._id, rq.body, { new: true });

    promise.then((person) => {
        if (!checkFound(res, person)) return;
        res.json(person);
        console.log('person updated successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}

function getPersons(rq, res) {
    const docQuery = Person.find({ IsDeleted: 'false' });

    docQuery
        .exec()
        .then(persons => {
            res.status(200).json(persons);
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

function getPersonsByUser(rq, res) {
    username = rq.params.username

    User.find({ username: username }).then(user => {
        const usr = new User(user[0]);
        const list = usr.Authority.Persons;
        const obj_ids = list.map(function (item) { return ObjectId(item) });
        const doQuer=Person;
        console.log(obj_ids)
        if (usr.Roll != 'admin')
            docQuery = Person.find({ $and: [{ "_id": { "$in": obj_ids } }, { IsDeleted: false }] });
        else
            docQuery = Person.find({ IsDeleted: false });
        docQuery
            .exec()
            .then(persons => {
                res.status(200).json(persons);
            })
            .catch(error => {
                res.status(500).json(error)
            })
    })
}

function deletePerson(rq, res) {

    const promise = Person.findByIdAndRemove(rq.params.personId);

    promise.then((person) => {
        if (!checkFound(res, person)) return;
        res.json(person);
        console.log('person deleted successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
}

function checkFound(res, person) {
    if (!person) {
        res.status(404).json({
            status: false,
            message: 'person not found!'
        });
        return;
    }
    return person;
}


function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
        return error;
    }
}

module.exports = {
    postPerson,
    putPerson,
    getPersons,
    getPersonsByUser,
    deletePerson
}