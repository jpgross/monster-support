const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name1: String, name2: String, name3: String, name4: String 
});
gameSchema.set('toJSON', { getters: true, virtuals: false });
const Game = mongoose.model('Game', gameSchema);

//TODO some maddening stuff here with options/defaults...
async function createGame(playerName, env) {

    try {
        mongoose.connect(env['DATABASE_URL'], env['DATABASE_NAME']);
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