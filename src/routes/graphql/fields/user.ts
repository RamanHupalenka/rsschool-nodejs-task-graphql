import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { UserArgs, userResolver } from '../resolvers/user.js';
import { UserType } from '../objectTypes/user.js';

export const userField: GraphQLFieldConfig<EmptySource, GraphQLContext, UserArgs> = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
  },
  resolve: userResolver,
};
