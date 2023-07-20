import { Post, User } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptyArgs } from '../tsTypes/types.js';

type UserPostsResolver = (
  source: User,
  args: EmptyArgs,
  context: FastifyInstance,
) => Promise<Post[]>;

export const userPostsResolver: UserPostsResolver = async ({ id }, _args, { prisma }) => {
  const result = await prisma.post.findMany({
    where: {
      authorId: id,
    },
  });

  return result;
};
