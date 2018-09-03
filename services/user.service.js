const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });

require('../mongo').connect().then(() => {
    console.log('MongoDB Connected')
}).catch((error) => {
    console.log(error);
});



function postUser(rq, res) {
    
    const user = new User(rq.body);

    bcrypt.hash(user.password, 10, function (err, hash) {
        user.password = hash;
        console.log(user)
        user.save((error) => {
            if (checkServerError(res, error)) return;
            res.status(201).json(user);
            console.log('user created successfully!');
        })
    });

}

function putUser(rq, res) {
    const user = new User(rq.body);

    // bcrypt.hash(user.password, 10).then((hash) => {
    //     user.password=hash;
    console.log(user)
    const promise = User.findByIdAndUpdate(user._id, user);

    promise.then((user) => {
        if (!checkFound(res, user)) return;
        res.json(user);
        console.log('user updated successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    })
    // });

}


function putUserAndPassword(rq, res) {
    const user = new User(rq.body);
    bcrypt.hash(user.password, 10).then((hash) => {
        user.password = hash;
        const promise = User.findByIdAndUpdate(user._id, user);

        promise.then((user) => {
            if (!checkFound(res, user)) return;
            res.json(user);
            console.log('user updated successfully!');
        }).catch((error) => {
            checkServerError(res, error);
        })
    });

}

function deleteUser(rq, res) {
    const promise = User.findByIdAndRemove(rq.params.userId);

    promise.then((user) => {
        if (!checkFound(res, user)) return;
        res.json(user);
        console.log('user deleted successfully!');
    }).catch((error) => {
        checkServerError(res, error);
    });
}

function authenticateUser(rq, res) {

    const { username, password } = rq.body;
    console.log(username, password);
    User.findOne({ username }, (error, user) => {
        if (checkServerError(res, error)) return;
        if (!checkFound(res, user)) return;
        const roll = user.Roll;
        bcrypt.compare(password, user.password, function (err, isMatch) {
            //     if (err) throw err;
            //     if (isMatch) {
            //         const token = jwt.sign({ data: user }, 'hününü höylöylöy', {
            //             expiresIn: 604800 // 1 week
            //         });
            //         res.json({
            //             status: true,
            //             expires_in:604800,
            //             roll,
            //             token
            //         })
            //     } else {
            //         return res.json({ success: false, msg: 'Wrong password' });
            //     }
            // });
            if (!isMatch)
                res.status(404).json({
                    status: false,
                    message: 'Authentication failed, wrong password'
                })
            else {
                const payload = {
                    username
                };
                const token = jwt.sign(payload, 'process.env.SECRET_WORD', {
                    expiresIn: 11720
                })

                res.json({
                    status: true,
                    expires_in: 11720,
                    roll,
                    token
                })
            }
        });
    });


    // bcrypt.compare(password, user.password)
    //     .then((result) => {
    //         if (!result)
    //             res.status(404).json({
    //                 status: false,
    //                 message: 'Authentication failed, wrong password'
    //             })
    //         else {
    //             const payload = {
    //                 username
    //             };
    //             const token = jwt.sign(payload, process.env.SECRET_WORD, {
    //                 expiresIn: 11720
    //             })

    //             res.json({
    //                 status: true,
    //                 expires_in: 11720,
    //                 roll,
    //                 token
    //             })
    //         }

    //     })

}
function getUsers(rq, res) {
    const doQuery = User.find({})

    doQuery.exec()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

function getUser(rq, res) {

    const doQuery = User.find({ username: rq.params.username })

    doQuery.exec()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).json(error)
        })
}


function checkFound(res, user) {
    if (!user) {
        res.status(404).json({
            status: false,
            message: 'Authentication error. User not found!'
        });
        return;
    }
    return user;
}


function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
        return error;
    }
}

module.exports = {
    postUser,
    putUser,
    putUserAndPassword,
    deleteUser,
    authenticateUser,
    getUsers,
    getUser
}