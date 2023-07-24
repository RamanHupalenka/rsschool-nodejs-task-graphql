import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { CreatePostInputType } from '../inputTypes/createPost.js';
import { PostType } from '../objectTypes/post.js';
import { CreatePostArgs, createPostResolver } from '../resolvers/createPost.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const createPostField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  CreatePostArgs
> = {
  type: PostType,
  args: {
    dto: {
      type: new GraphQLNonNull(CreatePostInputType),
    },
  },
  resolve: createPostResolver,
};
