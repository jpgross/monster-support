const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name1: String, name2: String, name3: String, name4: String 
});
gameSchema.set('toJSON', { getters: true, virtuals: false });
const Game = mongoose.model('Game', gameSchema);

//TODO are these options done decently?
async function createGame(playerName, options) {
    var _opts = _.defaults(options || {}, {
        uri: process.env['DATABASE_URL'],
        dbname: process.env['DATABASE_NAME']
    });
 
    console.log(`options: ${_opts}`);
    try {
        mongoose.connect(_opts.uri, _opts.dbname);
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