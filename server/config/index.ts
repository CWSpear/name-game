import { assign } from 'lodash';

export interface IConfig {
  clientUrl: string;
  databaseUrl: string;
  port: number;
  isDev: boolean;
  isDocker: boolean;
}

import baseConfig from './base';
import productionConfig from './production';

export const config = <IConfig>assign(<IConfig>{}, baseConfig, process.env.NODE_ENV === 'production' ? productionConfig : {});
