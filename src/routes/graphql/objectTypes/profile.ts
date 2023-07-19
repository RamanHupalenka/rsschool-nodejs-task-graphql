import { PrismaClient, Profile } from '@prisma/client';
import { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLInt } from 'graphql';
import { MemberTypeIdType } from '../scalarTypes/memberTypeId.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { EmptyArgs } from '../tsTypes/types.js';
import { MemberTypeType } from './memberType.js';

// update any
export const ProfileType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
    isMale: {
      type: GraphQLBoolean,
    },
    yearOfBirth: {
      type: GraphQLInt,
    },
    userId: {
      type: UUIDType,
    },
    memberTypeId: {
      type: MemberTypeIdType,
    },
    memberType: {
      type: MemberTypeType,
      resolve: (source: Profile, _args: EmptyArgs, context: { prisma: PrismaClient }) => {
        const result = context.prisma.memberType.findUnique({
          where: {
            id: source.memberTypeId,
          },
        });

        return result;
      },
    },
  }),
});
