import { User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptySource, EmptyArgs } from '../tsTypes/types.js';

type UsersResolver = (
  source: EmptySource,
  args: EmptyArgs,
  context: FastifyInstance,
) => Promise<User[] | null>;

export const usersResolver: UsersResolver = async (_source, _args, { prisma }) => {
  const result = await prisma.user.findMany();

  return result;
};
