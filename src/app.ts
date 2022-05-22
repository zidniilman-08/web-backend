import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { createServer } from 'http';

import { ENV } from '@envConfig';
import { graphqlConfig } from '@graphql';
import { NotFoundError } from '@common/errors/not-found.error';
import { errorHandler } from '@middlewares/error-handler';

const app = express();
const httpServer = createServer(app);

app.set('trust proxy', false);
app.use(express.json());
app.use(cors());
app.use(helmet());

export async function start() {
  const apolloGraphqlServer = await graphqlConfig({ httpServer });
  await apolloGraphqlServer.start();

  apolloGraphqlServer.applyMiddleware({ app, path: ENV.GRAPHQL_PATH });

  app.all('*', async (req, res) => {
    throw new NotFoundError();
  });

  app.use(errorHandler);

  httpServer.listen(ENV.PORT, () => {
    console.log(
      `App ${ENV.APP_NAME} is running at port: ${ENV.PORT} with mode: ${ENV.MODE}`
    );
  });
}
