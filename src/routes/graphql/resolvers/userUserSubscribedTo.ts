import { User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptyArgs } from '../tsTypes/types.js';

type UserUserSubscribedToResolver = (
  source: User,
  args: EmptyArgs,
  context: FastifyInstance,
) => Promise<User[]>;

export const userUserSubscribedToResolver: UserUserSubscribedToResolver = async (
  { id },
  _args,
  { prisma },
) => {
  const result = await prisma.user.findMany({
    where: {
      NOT: {
        id,
      },
      subscribedToUser: {
        some: {
          subscriberId: id,
        },
      },
    },
  });

  return result;
};
