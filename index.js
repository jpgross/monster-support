const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name1: String, name2: String, name3: String, name4: String 
});
gameSchema.set('toJSON', { getters: true, virtuals: false });



const schemas = { Game: mongoose.model('Game', gameSchema)};

module.exports.schemas = schemas;