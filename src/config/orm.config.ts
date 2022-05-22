import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path:
    process.env.NODE_ENV === 'development'
      ? path.resolve(process.cwd(), '.env.local')
      : path.resolve(process.cwd(), '.env'),
});

const ormParameters = {
  synchronize: process.env.ORM_SYNCHRONIZE,
  logging: process.env.ORM_LOGGING,
};

export const ORM_CONFIG = {
  postgre: {
    type: 'postgre',
    host: process.env.DB_POSTGRE_HOST,
    port: Number(process.env.DB_POSTGRE_PORT),
    username: process.env.DB_POSTGRE_USER,
    password: process.env.DB_POSTGRE_PASSWORD,
    database: process.env.DB_POSTGRE_NAME,
    ...ormParameters,
  },
  mysql: {
    type: 'mysql',
    host: process.env.DB_MYSQL_HOST,
    port: Number(process.env.DB_MYSQL_PORT),
    username: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_NAME,
    synchronize: process.env.ORM_SYNCHRONIZE,
    logging: process.env.ORM_LOGGING,
    ...ormParameters,
  },
  // another database
};
