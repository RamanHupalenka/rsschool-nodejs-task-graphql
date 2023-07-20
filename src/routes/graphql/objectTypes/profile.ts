import { Profile } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLInt } from 'graphql';
import { profileMemberTypeResolver } from '../resolvers/profileMemberType.js';
import { MemberTypeIdType } from '../scalarTypes/memberTypeId.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { MemberTypeType } from './memberType.js';

export const ProfileType: GraphQLObjectType<Profile, FastifyInstance> =
  new GraphQLObjectType({
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
        resolve: profileMemberTypeResolver,
      },
    }),
  });
