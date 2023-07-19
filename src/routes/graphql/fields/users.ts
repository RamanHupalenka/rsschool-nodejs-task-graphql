import { FastifyInstance } from 'fastify';
import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { UserType } from '../objectTypes/user.js';
import { usersResolver } from '../resolvers/users.js';
import { EmptyArgs, EmptySource } from '../tsTypes/types.js';

export const usersField: GraphQLFieldConfig<EmptySource, FastifyInstance, EmptyArgs> = {
  type: new GraphQLNonNull(new GraphQLList(UserType)),
  resolve: usersResolver,
};
