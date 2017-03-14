import { IConfig } from './index';

export default <IConfig>{
  clientUrl: 'http://localhost:1337',
  databaseUrl: 'postgres://namegame:02892gfh20-rikjfg2023ifri2@localhost:5432/namegame',
  port: process.env.PORT || 7331,
  isDev: process.env.NODE_ENV !== 'production',
  isDocker: !!process.env.DOCKER,
};
