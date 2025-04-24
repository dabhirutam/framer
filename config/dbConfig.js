const db = require('mongoose');

db.connect('mongodb+srv://DabhiRutam:aecc057314f828c1d5b5f4@booksdatabase.r8v9p.mongodb.net/schoole_rest_api').then(() => {
    console.log("Database is Conected");
}).catch(err => {
    console.log("Err", err);
});

module.exports = db;