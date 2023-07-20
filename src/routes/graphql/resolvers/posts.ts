import { Post } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptySource, EmptyArgs } from '../tsTypes/types.js';

type PostsResolver = (
  source: EmptySource,
  args: EmptyArgs,
  context: FastifyInstance,
) => Promise<Post[]>;

export const postsResolver: PostsResolver = async (_source, _args, { prisma }) => {
  const result = await prisma.post.findMany();

  return result;
};
