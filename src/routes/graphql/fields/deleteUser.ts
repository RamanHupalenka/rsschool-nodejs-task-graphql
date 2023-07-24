import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { DeleteUserArgs, deleteUserResolver } from '../resolvers/deleteUser.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { VoidType } from '../scalarTypes/void.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const deleteUserField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  DeleteUserArgs
> = {
  type: VoidType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
  },
  resolve: deleteUserResolver,
};
