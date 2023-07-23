import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { ChangeUserInputType } from '../inputTypes/changeUser.js';
import { UserType } from '../objectTypes/user.js';
import { ChangeUserArgs, changeUserResolver } from '../resolvers/changeUser.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const changeUserField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  ChangeUserArgs
> = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
    dto: {
      type: new GraphQLNonNull(ChangeUserInputType),
    },
  },
  resolve: changeUserResolver,
};
