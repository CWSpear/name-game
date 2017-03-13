import * as Sequelize from 'sequelize';
import { Application } from 'feathers';
import * as service from 'feathers-sequelize';

// @TODO test this to be dymanic
const host = process.env.NODE_ENV === 'production' ? 'database' : 'localhost';
export const db = new Sequelize(`postgres://namegame:02892gfh20-rikjfg2023ifri2@database:5432/namegame`);

import { GameModel } from './game';
import { PlayerModel } from './player';

db.sync().then(() => {
  console.log(`DB sync'd`);
}).catch(err => {
  console.error('DB sync error', err);
});

export function setUpRoutes(app: Application) {
  app.use('/api/games', service({ Model: GameModel }));

  app.use('/api/players', service({ Model: PlayerModel }));
}
