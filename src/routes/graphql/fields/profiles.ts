import { FastifyInstance } from 'fastify';
import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { EmptyArgs, EmptySource } from '../tsTypes/types.js';
import { ProfileType } from '../objectTypes/profile.js';
import { profilesResolver } from '../resolvers/profiles.js';

export const profilesField: GraphQLFieldConfig<EmptySource, FastifyInstance, EmptyArgs> = {
  type: new GraphQLNonNull(new GraphQLList(ProfileType)),
  resolve: profilesResolver,
};
