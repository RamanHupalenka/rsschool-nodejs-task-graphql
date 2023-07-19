import { FastifyInstance } from 'fastify';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { EmptySource } from '../tsTypes/types.js';
import { PostArgs, postResolver } from '../resolvers/post.js';
import { PostType } from '../objectTypes/post.js';
import { UUIDType } from '../scalarTypes/uuid.js';

export const postField: GraphQLFieldConfig<EmptySource, FastifyInstance, PostArgs> = {
  type: PostType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
  },
  resolve: postResolver,
};
