import { Profile } from '@prisma/client';
import { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLInt } from 'graphql';
import { profileMemberTypeResolver } from '../resolvers/profileMemberType.js';
import { MemberTypeIdType } from '../scalarTypes/memberTypeId.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { GraphQLContext } from '../tsTypes/main.js';
import { MemberTypeType } from './memberType.js';

export const ProfileType: GraphQLObjectType<Profile, GraphQLContext> =
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
