import { FastifyInstance } from 'fastify';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { EmptySource } from '../tsTypes/types.js';
import { MemberTypeArgs, memberTypeResolver } from '../resolvers/memberType.js';
import { MemberTypeType } from '../objectTypes/memberType.js';
import { MemberTypeIdType } from '../scalarTypes/memberTypeId.js';

export const memberTypeField: GraphQLFieldConfig<
  EmptySource,
  FastifyInstance,
  MemberTypeArgs
> = {
  type: MemberTypeType,
  args: {
    id: {
      type: new GraphQLNonNull(MemberTypeIdType),
    },
  },
  resolve: memberTypeResolver,
};
