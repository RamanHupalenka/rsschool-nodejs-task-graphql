import { FastifyInstance } from 'fastify';
import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { EmptyArgs, EmptySource } from '../tsTypes/types.js';
import { memberTypesResolver } from '../resolvers/memberTypes.js';
import { MemberTypeType } from '../objectTypes/memberType.js';

export const memberTypesField: GraphQLFieldConfig<
  EmptySource,
  FastifyInstance,
  EmptyArgs
> = {
  type: new GraphQLNonNull(new GraphQLList(MemberTypeType)),
  resolve: memberTypesResolver,
};
