import Bluebird from 'bluebird';
import Sequelize from 'sequelize';
import { Application } from 'feathers';
import service from 'feathers-sequelize';
import { config } from '../config';

const url = `postgres://${config.database.username}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.database}`;
export const db = new Sequelize(url);

import { GameModel } from './game';
import { PlayerModel } from './player';

console.log(`sync'ing DB...`);
retry(3, 5000, () => db.sync()).then(() => {
  console.log(`DB sync'd`);
}, err => {
  console.error('DB sync error', err);
});

export function setUpRoutes(app: Application) {
  app.use('/api/games', service({ Model: GameModel }));

  app.use('/api/players', service({ Model: PlayerModel }));
}

async function retry(tries, timeout, fn) {
  try {
    return await fn();
  } catch (err) {
    if (tries <= 0) {
      console.log('Out of attempts');
      throw err;
    }

    console.log(`Failed, retrying in ${timeout}...`);

    await Bluebird.delay(timeout);
    return retry(--tries, timeout, fn);
  }
}
