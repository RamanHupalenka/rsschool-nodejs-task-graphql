import { User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptySource } from '../tsTypes/types.js';

export interface UserArgs {
  id: string;
}

type UserResolver = (
  source: EmptySource,
  args: UserArgs,
  context: FastifyInstance,
) => Promise<User | null>;

export const userResolver: UserResolver = async (_source, { id }, { prisma }) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return result;
};
