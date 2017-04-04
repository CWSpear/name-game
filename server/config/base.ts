import { IConfig } from './index';

export default <IConfig>{
  clientUrl: 'http://localhost:1337',
  database: {
    host: 'localhost',
    database: 'namegame',
    username: 'namegame',
    password: '02892gfh20-rikjfg2023ifri2',
    port: 4321,
  },
  port: process.env.PORT || 7331,
  isDev: process.env.NODE_ENV !== 'production',
  isDocker: !!process.env.DOCKER,
};
