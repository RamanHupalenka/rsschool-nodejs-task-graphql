import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';
import { PostArgs, postResolver } from '../resolvers/post.js';
import { PostType } from '../objectTypes/post.js';
import { UUIDType } from '../scalarTypes/uuid.js';

export const postField: GraphQLFieldConfig<EmptySource, GraphQLContext, PostArgs> = {
  type: PostType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
  },
  resolve: postResolver,
};
