import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { DeletePostArgs, deletePostResolver } from '../resolvers/deletePost.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { VoidType } from '../scalarTypes/void.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const deletePostField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  DeletePostArgs
> = {
  type: VoidType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
  },
  resolve: deletePostResolver,
};
