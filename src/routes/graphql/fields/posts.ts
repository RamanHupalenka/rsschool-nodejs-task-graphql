import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { EmptyArgs, EmptySource, GraphQLContext } from '../tsTypes/main.js';
import { postsResolver } from '../resolvers/posts.js';
import { PostType } from '../objectTypes/post.js';

export const postsField: GraphQLFieldConfig<EmptySource, GraphQLContext, EmptyArgs> = {
  type: new GraphQLNonNull(new GraphQLList(PostType)),
  resolve: postsResolver,
};
