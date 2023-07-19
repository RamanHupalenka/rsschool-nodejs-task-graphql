import { FastifyInstance } from 'fastify';
import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { EmptyArgs, EmptySource } from '../tsTypes/types.js';
import { postsResolver } from '../resolvers/posts.js';
import { PostType } from '../objectTypes/post.js';

export const postsField: GraphQLFieldConfig<EmptySource, FastifyInstance, EmptyArgs> = {
  type: new GraphQLNonNull(new GraphQLList(PostType)),
  resolve: postsResolver,
};
