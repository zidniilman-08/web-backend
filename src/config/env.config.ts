import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path:
    process.env.NODE_ENV === 'development'
      ? path.resolve(process.cwd(), '.env.local')
      : path.resolve(process.cwd(), '.env'),
});

export const ENV = {
  MODE: process.env.MODE,
  APP_NAME: process.env.APP_NAME,
  PORT: process.env.PORT,
  GRAPHQL_PATH: process.env.GRAPHQL_PATH,
  GRAPHQL_SUBSCRIPTION_PATH: process.env.GRAPHQL_SUBSCRIPTION_PATH,
};
