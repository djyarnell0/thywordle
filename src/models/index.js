// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { GameStatistics } = initSchema(schema);

export {
  GameStatistics
};