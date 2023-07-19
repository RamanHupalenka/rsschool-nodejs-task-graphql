import { FastifyInstance } from 'fastify';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { EmptySource } from '../tsTypes/types.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { UserArgs, userResolver } from '../resolvers/user.js';
import { UserType } from '../objectTypes/user.js';

export const userField: GraphQLFieldConfig<EmptySource, FastifyInstance, UserArgs> = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
  },
  resolve: userResolver,
};
