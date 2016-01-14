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

app.use('/games', memory());
app.use('/players', memory());

// Create a dummy Todo
app.service('games').create({
    id: 1,
    name: 'First Game',
}).then(game => {
    console.log('created game', game);
});

// Start the server.
const port = 3030;

app.listen(port, function () {
    console.log('Feathers server listening on port ' + port);
});
