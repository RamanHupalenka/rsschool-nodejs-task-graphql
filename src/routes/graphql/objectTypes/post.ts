import { Post } from '@prisma/client';
import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { UUIDType } from '../scalarTypes/uuid.js';
import { GraphQLContext } from '../tsTypes/main.js';

export const PostType: GraphQLObjectType<Post, GraphQLContext> = new GraphQLObjectType({
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
