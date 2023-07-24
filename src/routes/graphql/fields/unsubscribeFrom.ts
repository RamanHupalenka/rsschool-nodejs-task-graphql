import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import {
  UnsubscribeFromArgs,
  unsubscribeFromResolver,
} from '../resolvers/unsubscribeFrom.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { VoidType } from '../scalarTypes/void.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const unsubscribeFromField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  UnsubscribeFromArgs
> = {
  type: VoidType,
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: unsubscribeFromResolver,
};
