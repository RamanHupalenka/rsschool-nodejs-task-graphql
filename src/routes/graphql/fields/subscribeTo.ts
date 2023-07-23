import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { UserType } from '../objectTypes/user.js';
import { SubscribeToArgs, subscribeToResolver } from '../resolvers/subscribeTo.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const subscribeToField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  SubscribeToArgs
> = {
  type: UserType,
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  },
  resolve: subscribeToResolver,
};
