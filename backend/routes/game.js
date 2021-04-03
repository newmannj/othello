const router = require('express').Router();
const Game = require('../models/game');

/**
 * Create a new game
 */
router.post('/createGame/', (req, res) => {
    //First create a new game code.
    //Then create a new game instance.
    
    res.status(400).send({gameCode:"TEST123"});
    //console.log(req.body);
});


/**
 * Get the current version of the game board
 */
router.put('/getBoard/:gameCode', (req, res) => {
    res.status(400).send({message: "Not yet implemented!"});
});

/**
 * Makes the desired move
 */
router.put('/makeMove', (req, res) => {
    res.status(400).send({message: "Not yet implemented!"});
});

module.exports = router;