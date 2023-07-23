import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { ChangePostInputType } from '../inputTypes/changePost.js';
import { PostType } from '../objectTypes/post.js';
import { ChangePostArgs, changePostResolver } from '../resolvers/changePost.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const changePostField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  ChangePostArgs
> = {
  type: PostType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
    dto: {
      type: new GraphQLNonNull(ChangePostInputType),
    },
  },
  resolve: changePostResolver,
};
