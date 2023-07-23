import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { CreateProfileInputType } from '../inputTypes/createProfile.js';
import { ProfileType } from '../objectTypes/profile.js';
import { CreateProfileArgs, createProfileResolver } from '../resolvers/createProfile.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const createProfileField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  CreateProfileArgs
> = {
  type: ProfileType,
  args: {
    dto: {
      type: new GraphQLNonNull(CreateProfileInputType),
    },
  },
  resolve: createProfileResolver,
};
