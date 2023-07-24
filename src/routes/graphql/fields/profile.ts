import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { ProfileType } from '../objectTypes/profile.js';
import { ProfileArgs, profileResolver } from '../resolvers/profile.js';

export const profileField: GraphQLFieldConfig<EmptySource, GraphQLContext, ProfileArgs> =
  {
    type: ProfileType,
    args: {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
    },
    resolve: profileResolver,
  };
