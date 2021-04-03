const mongoose = require('mongoose');

/**
 * This schema represents a game object.
 */
const gameSchema = new mongoose.Schema({
    gameCode: String,
    moves: Array
});

module.exports = gameSchema;
