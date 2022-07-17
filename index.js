const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name1: String, name2: String, name3: String, name4: String 
});
gameSchema.set('toJSON', { getters: true, virtuals: false });
const Game = mongoose.model('Game', gameSchema);

//TODO need to set uri/name in a constructor or something?
async function createGame(dbUri, dbName, playerName) {

    try {
        mongoose.connect(dbUri, {dbName: dbName});
        const game = new Game({ name1: playerName});
        await game.save();

        console.log(`created game ${game._id}`);

        return game;
    } catch (e) {
        console.error('error during save', e);
        throw e;
    }
}

module.exports.createGame = createGame;