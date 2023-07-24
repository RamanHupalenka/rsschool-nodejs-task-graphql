import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { DeleteProfileArgs, deleteProfileResolver } from '../resolvers/deleteProfile.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { VoidType } from '../scalarTypes/void.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const deleteProfileField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  DeleteProfileArgs
> = {
  type: VoidType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
  },
  resolve: deleteProfileResolver,
};
