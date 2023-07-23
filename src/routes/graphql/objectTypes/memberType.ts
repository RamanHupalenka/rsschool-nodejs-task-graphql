import { MemberType } from '@prisma/client';
import { GraphQLObjectType, GraphQLNonNull, GraphQLFloat, GraphQLInt } from 'graphql';
import { MemberTypeIdType } from '../scalarTypes/memberTypeId.js';
import { GraphQLContext } from '../tsTypes/main.js';

export const MemberTypeType: GraphQLObjectType<MemberType, GraphQLContext> =
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
