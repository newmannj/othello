const express = require("express");
const http = require("http");
const cors = require('cors');
const port = 3031;
const app = express();

const gameRoute = require('./routes/game');

app.options('*', cors());

app.use('/api/game', gameRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


