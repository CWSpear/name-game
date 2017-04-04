import { assign } from 'lodash';

export interface IConfig {
  clientUrl: string;
  database: {
    host: string;
    database: string;
    username: string;
    password: string;
    port: number;
  };
  port: number;
  isDev: boolean;
  isDocker: boolean;
}

import baseConfig from './base';
import productionConfig from './production';

export const config = <IConfig>assign(<IConfig>{}, baseConfig, process.env.NODE_ENV === 'production' ? productionConfig : {});
