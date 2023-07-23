import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { ChangeProfileInputType } from '../inputTypes/changeProfile.js';
import { ProfileType } from '../objectTypes/profile.js';
import { ChangeProfileArgs, changeProfileResolver } from '../resolvers/changeProfile.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const changeProfileField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  ChangeProfileArgs
> = {
  type: ProfileType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
    dto: {
      type: new GraphQLNonNull(ChangeProfileInputType),
    },
  },
  resolve: changeProfileResolver,
};
