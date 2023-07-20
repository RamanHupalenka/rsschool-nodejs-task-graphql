import { Profile, User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptyArgs } from '../tsTypes/types.js';

type UserProfileResolver = (
  source: User,
  args: EmptyArgs,
  context: FastifyInstance,
) => Promise<Profile | null>;

export const userProfileResolver: UserProfileResolver = async (
  { id },
  _args,
  { prisma },
) => {
  const result = await prisma.profile.findUnique({
    where: {
      userId: id,
    },
  });

  return result;
};
