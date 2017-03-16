import * as Sequelize from 'sequelize';
import { Application } from 'feathers';
import * as service from 'feathers-sequelize';
import { config } from '../config';

export const db = new Sequelize(config.databaseUrl);

import { GameModel } from './game';
import { PlayerModel } from './player';

console.log(`sync'ing DB...`);
retry(3, 5000, () => db.sync()).then(() => {
  console.log(`DB sync'd`);
}).catch(err => {
  console.error('DB sync error', err);
});

export function setUpRoutes(app: Application) {
  app.use('/api/games', service({ Model: GameModel }));

  app.use('/api/players', service({ Model: PlayerModel }));
}

async function retry(tries, timeout, fn) {
  try {
    await fn();
  } catch (err) {
    if (tries <= 0) {
      console.log('Out of attempts');
      throw err;
    }

    console.log(`Failed, retrying in ${timeout}...`);

    return setTimeout(() => retry(--tries, timeout, fn), timeout);
  }
}
