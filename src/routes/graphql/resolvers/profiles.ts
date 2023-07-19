import { Profile } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptySource, EmptyArgs } from '../tsTypes/types.js';

type ProfilesResolver = (
  source: EmptySource,
  args: EmptyArgs,
  context: FastifyInstance,
) => Promise<Profile[] | null>;

export const profilesResolver: ProfilesResolver = async (_source, _args, { prisma }) => {
  const result = await prisma.profile.findMany();

  return result;
};
