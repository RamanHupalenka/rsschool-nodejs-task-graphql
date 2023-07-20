import { MemberType } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { GraphQLObjectType, GraphQLNonNull, GraphQLFloat, GraphQLInt } from 'graphql';
import { MemberTypeIdType } from '../scalarTypes/memberTypeId.js';

export const MemberTypeType: GraphQLObjectType<MemberType, FastifyInstance> =
  new GraphQLObjectType({
    name: 'MemberType',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(MemberTypeIdType),
      },
      discount: {
        type: GraphQLFloat,
      },
      postsLimitPerMonth: {
        type: GraphQLInt,
      },
    }),
  });
