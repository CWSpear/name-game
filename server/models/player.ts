import { Instance } from '@types/sequelize';

import { db } from './index';
import { IPlayer } from '../../types';

export const PlayerModel = db.define<Instance<IPlayer>, IPlayer>('player', {
  id: {
    type: db.Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: db.Sequelize.STRING,
  },
}, {
  // we don't use timestamps, so let's not bother
  timestamps: false,
});
