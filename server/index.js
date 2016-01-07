// app.js
const feathers = require('feathers');
const bodyParser = require('body-parser');
const memory = require('feathers-memory');
const uuid = require('node-uuid');

// Create a feathers instance.
const app = feathers()
    // Enable Socket.io
    .configure(feathers.socketio())
    // Enable REST services
    .configure(feathers.rest())
    // Turn on JSON parser for REST services
    .use(bodyParser.json())
    // Turn on URL-encoded parser for REST services
    .use(bodyParser.urlencoded({ extended: true }));

// Create an in-memory Feathers service with a default page size of 2 items
// and a maximum size of 4
app.use('/games', memory());
app.use('/games/:gameId/players', memory());

// Create a dummy Todo
app.service('games').create({
    id: 1,
    name: 'First Game',
}).then(game => {
    console.log('created game', game);
});

app.service('games/1/players').create({
    id: 1,
    name: 'First Player',
}).then(player => {
    console.log('created player', player);
});

// Start the server.
const port = 3030;

app.listen(port, function () {
    console.log('Feathers server listening on port ' + port);
});
