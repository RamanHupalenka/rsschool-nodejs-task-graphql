import { User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptyArgs } from '../tsTypes/types.js';

type UserSubscribedToUserResolver = (
  source: User,
  args: EmptyArgs,
  context: FastifyInstance,
) => Promise<User[]>;

export const userSubscribedToUserResolver: UserSubscribedToUserResolver = async (
  { id },
  _args,
  { prisma },
) => {
  const result = await prisma.user.findMany({
    where: {
      NOT: {
        id,
      },
      userSubscribedTo: {
        some: {
          authorId: id,
        },
      },
    },
  });

  return result;
};
