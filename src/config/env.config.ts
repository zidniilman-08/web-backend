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

export const DB_ENV = {
  ORM_SYNCHRONIZE: process.env.ORM_SYNCHRONIZE,
  ORM_LOGGING: process.env.ORM_LOGGING,
  POSTGRES: {
    HOST: process.env.DB_POSTGRES_HOST,
    PORT: process.env.DB_POSTGRES_PORT,
    USER: process.env.DB_POSTGRES_USER,
    PASS: process.env.DB_POSTGRES_PASSWORD,
    NAME: process.env.DB_POSTGRES_NAME,
  },
  MYSQL: {
    HOST: process.env.DB_MYSQL_HOST,
    PORT: process.env.DB_MYSQL_PORT,
    USER: process.env.DB_MYSQL_USER,
    PASS: process.env.DB_MYSQL_PASSWORD,
    NAME: process.env.DB_MYSQL_NAME,
  },
};
