import { User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
} from 'graphql';
import { userPostsResolver } from '../resolvers/userPosts.js';
import { userProfileResolver } from '../resolvers/userProfile.js';
import { userSubscribedToUserResolver } from '../resolvers/userSubscribedToUser.js';
import { userUserSubscribedToResolver } from '../resolvers/userUserSubscribedTo.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { PostType } from './post.js';
import { ProfileType } from './profile.js';

export const UserType: GraphQLObjectType<User, FastifyInstance> = new GraphQLObjectType({
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
      resolve: userProfileResolver,
    },
    posts: {
      type: new GraphQLNonNull(new GraphQLList(PostType)),
      resolve: userPostsResolver,
    },
    userSubscribedTo: {
      type: new GraphQLNonNull(new GraphQLList(UserType)),
      resolve: userUserSubscribedToResolver,
    },
    subscribedToUser: {
      type: new GraphQLNonNull(new GraphQLList(UserType)),
      resolve: userSubscribedToUserResolver,
    },
  }),
});
