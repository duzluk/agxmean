const mongoose = require('mongoose');
// require('dotenv').config({path: __dirname + '/.env'});

// mongoose.Promise = global.Promise;



// const mongoUri = `mongodb://${process.env.COSMOSDB_DB}.documents.azure.com:${process.env.COSMOSDB_PORT}/${process.env.COSMOSDB_DB}?ssl=true`;

// function connect() {
//     return mongoose.connect(mongoUri, {
//         auth: {
//             user: process.env.COSMOSDB_ACCOUNT,
//             password: process.env.COSMOSDB_KEY
//         }
//     });
// }

// const mongoUri=`${process.env.MONGO_DB}`
// function connect() {
//     return mongoose.connect(mongoUri);
// };



// function connect(){
//     uri = 'mongodb://bilalatmaca:12qWaSzxcv!@agx-shard-00-00-ee8d9.gcp.mongodb.net:27017,agx-shard-00-01-ee8d9.gcp.mongodb.net:27017,agx-shard-00-02-ee8d9.gcp.mongodb.net:27017/test?ssl=true&replicaSet=agx-shard-0&authSource=admin&retryWrites=true';

//     return mongoose.connect(uri, {
//         socketTimeoutMS: 0,
//         keepAlive: true,
//         reconnectTries: 30
//       });
// }

function connect(){
    azure="mongodb://bilalatmaca:Crossroad0749!@ds022408.mlab.com:22408/agxdb";
    //HEROKU:mongodb://<dbuser>:<dbpassword>@ds243502.mlab.com:43502/agx
    //uri='mongodb://bilalatmaca:Crossroad0749!@ds243502.mlab.com:43502/agx'
    return mongoose.connect(azure);
}

module.exports = {
    connect
};