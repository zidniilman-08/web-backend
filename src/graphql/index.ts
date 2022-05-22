import { ApolloServer } from 'apollo-server-express';
import {
  ApolloError,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

import resolvers from '@/resolvers';
import { ENV } from '@/config/env.config';

export async function graphqlConfig({ httpServer }) {
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: ENV.GRAPHQL_SUBSCRIPTION_PATH,
  });

  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: true,
    validate: false,
  });

  const serverCleanup = useServer(
    {
      schema,
      context: async (ctx, msg, args) => {
        
      },
    },
    wsServer
  );

  const graphqlServer = new ApolloServer({
    schema,
    context: async ({ req, connection }: any) => {
      try {
        
      } catch (err: any) {
        throw new ApolloError(`Cant connect - ${err.message}`);
      }
    },
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
      ApolloServerPluginLandingPageGraphQLPlayground,
    ],
  });

  return graphqlServer;
}
