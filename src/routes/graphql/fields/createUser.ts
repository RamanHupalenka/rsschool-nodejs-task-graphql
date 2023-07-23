import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { CreateUserInputType } from '../inputTypes/createUser.js';
import { UserType } from '../objectTypes/user.js';
import { CreateUserArgs, createUserResolver } from '../resolvers/createUser.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const createUserField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  CreateUserArgs
> = {
  type: UserType,
  args: {
    dto: {
      type: new GraphQLNonNull(CreateUserInputType),
    },
  },
  resolve: createUserResolver,
};
