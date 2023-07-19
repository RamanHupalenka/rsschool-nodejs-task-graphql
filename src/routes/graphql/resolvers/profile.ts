import { Profile } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptySource } from '../tsTypes/types.js';

export interface ProfileArgs {
  id: string;
}

type ProfileResolver = (
  source: EmptySource,
  args: ProfileArgs,
  context: FastifyInstance,
) => Promise<Profile | null>;

export const profileResolver: ProfileResolver = async (_source, { id }, { prisma }) => {
  const result = await prisma.profile.findUnique({
    where: {
      id,
    },
  });

  return result;
};
