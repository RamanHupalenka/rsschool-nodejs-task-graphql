import { PrismaClient, User } from '@prisma/client';
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
} from 'graphql';
import { UUIDType } from '../scalarTypes/uuid.js';
import { EmptyArgs } from '../tsTypes/types.js';
import { PostType } from './post.js';
import { ProfileType } from './profile.js';

// update any
export const UserType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
    name: {
      type: GraphQLString,
    },
    balance: {
      type: GraphQLFloat,
    },
    profile: {
      type: ProfileType,
      resolve: (source: User, _args: EmptyArgs, context: { prisma: PrismaClient }) => {
        const result = context.prisma.profile.findUnique({
          where: {
            userId: source.id,
          },
        });

        return result;
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: (source: User, _args: EmptyArgs, context: { prisma: PrismaClient }) => {
        const result = context.prisma.post.findMany({
          where: {
            authorId: source.id,
          },
        });

        return result;
      },
    },
    userSubscribedTo: {
      type: new GraphQLList(UserType),
      resolve: (source: User, _args: EmptyArgs, context: { prisma: PrismaClient }) => {
        const result = context.prisma.user.findMany({
          where: {
            NOT: {
              id: source.id,
            },
            subscribedToUser: {
              some: {
                subscriberId: source.id,
              },
            },
          },
        });

        return result;
      },
    },
    subscribedToUser: {
      type: new GraphQLList(UserType),
      resolve: (source: User, _args: EmptyArgs, context: { prisma: PrismaClient }) => {
        const result = context.prisma.user.findMany({
          where: {
            NOT: {
              id: source.id,
            },
            userSubscribedTo: {
              some: {
                authorId: source.id,
              },
            },
          },
        });

        return result;
      },
    },
  }),
});
