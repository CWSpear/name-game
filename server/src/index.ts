import * as feathers from 'feathers';
import * as socketio from 'feathers-socketio';
import * as rest from 'feathers-rest';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { setUpRoutes } from './models';

// import * as handler from'feathers-errors/handler';
const handler = require('feathers-errors/handler');

// A Feathers app is the same as an Express app
export const app = feathers();

const PORT = 7331;

// Add REST API support
app.configure(rest());

// Configure Socket.io real-time APIs
app.configure(socketio());

app.use(cors({ origin: 'http://localhost:1337' }));

// Parse HTTP JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded params
app.use(bodyParser.urlencoded({ extended: true }));

// set up routes
setUpRoutes(app);

// Register a nicer error handler than the default Express one
app.use(handler());

// Start the server
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
