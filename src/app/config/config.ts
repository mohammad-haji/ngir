import {DevelopmentConfigConst} from './env/development';
import {ProductionConfigConst} from './env/production';

const ENV = 'development'; // production
const ENV_CONFIG = ENV === 'development' ? DevelopmentConfigConst : ProductionConfigConst;


export const CONFIG = {
  env: ENV,
  ...ENV_CONFIG,
};
