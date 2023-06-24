// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbadmin:DHJb5AlrPlGPlUGq@clustercomp229.eohxdyl.mongodb.net/Vehicles";

// Database setup
let mongoose = require('../node_modules/mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;

}
//test