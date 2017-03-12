import { Instance } from '@types/sequelize';

import { db } from './index';
import { IGame } from '../../types';
import { PlayerModel } from './player';

export const GameModel = db.define<Instance<IGame>, IGame>('game', {
  id: {
    type: db.Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: db.Sequelize.STRING,
  },
  position: {
    type: db.Sequelize.INTEGER,
    defaultValue: 0,
  },
  started: {
    type: db.Sequelize.BOOLEAN,
    defaultValue: false,
  },
  hidden: {
    type: db.Sequelize.BOOLEAN,
    defaultValue: false,
  },
  owner: {
    type: db.Sequelize.STRING,
  },
});

GameModel.hasMany(PlayerModel, {
  onDelete: 'CASCADE',
  as: 'players',
});
