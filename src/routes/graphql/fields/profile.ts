import { FastifyInstance } from 'fastify';
import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { EmptySource } from '../tsTypes/types.js';
import { UUIDType } from '../scalarTypes/uuid.js';
import { ProfileType } from '../objectTypes/profile.js';
import { ProfileArgs, profileResolver } from '../resolvers/profile.js';

export const profileField: GraphQLFieldConfig<EmptySource, FastifyInstance, ProfileArgs> =
  {
    type: ProfileType,
    args: {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
    },
    resolve: profileResolver,
  };
