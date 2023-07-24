import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { EmptyArgs, EmptySource, GraphQLContext } from '../tsTypes/main.js';
import { ProfileType } from '../objectTypes/profile.js';
import { profilesResolver } from '../resolvers/profiles.js';

export const profilesField: GraphQLFieldConfig<EmptySource, GraphQLContext, EmptyArgs> = {
  type: new GraphQLNonNull(new GraphQLList(ProfileType)),
  resolve: profilesResolver,
};
