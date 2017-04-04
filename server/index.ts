import path from 'path';
import feathers from 'feathers';
import socketio from 'feathers-socketio';
import rest from 'feathers-rest';
import compress from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import { setUpRoutes } from './models';
import { config } from './config';

const fallback = require('express-history-api-fallback');


// import handler from'feathers-errors/handler';
const handler = require('feathers-errors/handler');

// A Feathers app is the same as an Express app
export const app = feathers();

// Add REST API support
app.configure(rest());

// Configure Socket.io real-time APIs
app.configure(socketio());

// use cors is not running in Docker
if (!config.isDocker) app.use(cors({ origin: config.clientUrl }));

// use compression
app.use(compress());

// Parse HTTP JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded params
app.use(bodyParser.urlencoded({ extended: true }));

// set up routes
setUpRoutes(app);

if (config.isDocker) {
  const root = path.join(__dirname, '../client');

  // serve static
  app.use(feathers.static(root));

  // fallback to SPA root
  app.use(fallback('index.html', { root }));
}

// Register a nicer error handler than the default Express one
app.use(handler());

// Start the server
app.listen(config.port, () => console.log(`listening on http://localhost:${config.port}`));
