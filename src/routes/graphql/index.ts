import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, graphqlSchema } from './schemas.js';
import { graphql, validate, parse } from 'graphql';
import depthLimit from 'graphql-depth-limit';
import { getDataLoaders } from './dataLoaders/main.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler({ body: { query, variables } }) {
      const { prisma } = fastify;

      const validationErrors = validate(graphqlSchema, parse(query), [depthLimit(5)]);

      if (validationErrors.length > 0) {
        return { errors: validationErrors };
      }

      const dataLoaders = getDataLoaders(prisma);

      const result = await graphql({
        contextValue: { prisma, ...dataLoaders },
        schema: graphqlSchema,
        source: query,
        variableValues: variables,
      });

      return result;
    },
  });
};

export default plugin;
