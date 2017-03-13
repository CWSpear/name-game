import * as path from 'path';
import * as feathers from 'feathers';
import * as socketio from 'feathers-socketio';
import * as rest from 'feathers-rest';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { setUpRoutes } from './models';

const fallback = require('express-history-api-fallback');


const isDev = process.env.NODE_ENV !== 'production';

// import * as handler from'feathers-errors/handler';
const handler = require('feathers-errors/handler');

// A Feathers app is the same as an Express app
export const app = feathers();

const PORT = 7331;

// Add REST API support
app.configure(rest());

// Configure Socket.io real-time APIs
app.configure(socketio());

if (isDev) app.use(cors({ origin: 'http://localhost:1337' }));

// Parse HTTP JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded params
app.use(bodyParser.urlencoded({ extended: true }));

// set up routes
setUpRoutes(app);

if (!isDev || true) {
  const root = path.join(__dirname, '../../client/dist');

  // serve static
  app.use(feathers.static(root));

  // fallback to SPA root
  app.use(fallback('index.html', { root }));
}

// Register a nicer error handler than the default Express one
app.use(handler());

// Start the server
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
