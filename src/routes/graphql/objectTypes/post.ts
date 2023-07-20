import { Post } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { UUIDType } from '../scalarTypes/uuid.js';

export const PostType: GraphQLObjectType<Post, FastifyInstance> = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
    title: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    authorId: {
      type: new GraphQLNonNull(UUIDType),
    },
  }),
});
