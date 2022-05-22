import { DataSourceOptions } from 'typeorm';
import { DB_ENV } from './env.config';

interface IOrmConfig {
  postgres: DataSourceOptions;
  mysql: DataSourceOptions;
}

const ormParameters = {
  synchronize: DB_ENV.ORM_SYNCHRONIZE === 'true',
  logging: DB_ENV.ORM_LOGGING === 'true',
};

export const ORM_CONFIG: IOrmConfig = {
  postgres: {
    type: 'postgres',
    host: DB_ENV.POSTGRES.HOST,
    port: Number(DB_ENV.POSTGRES.PORT),
    username: DB_ENV.POSTGRES.USER,
    password: DB_ENV.POSTGRES.PASS,
    database: DB_ENV.POSTGRES.NAME,
    ...ormParameters,
  },
  mysql: {
    type: 'mysql',
    host: DB_ENV.MYSQL.HOST,
    port: Number(DB_ENV.MYSQL.PORT),
    username: DB_ENV.MYSQL.USER,
    password: DB_ENV.MYSQL.PASS,
    database: DB_ENV.MYSQL.NAME,
    ...ormParameters,
  },
  // another database
};
