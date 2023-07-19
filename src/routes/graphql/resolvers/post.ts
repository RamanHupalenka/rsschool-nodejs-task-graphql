import { Post } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptySource } from '../tsTypes/types.js';

export interface PostArgs {
  id: string;
}

type PostResolver = (
  source: EmptySource,
  args: PostArgs,
  context: FastifyInstance,
) => Promise<Post | null>;

export const postResolver: PostResolver = async (_source, { id }, { prisma }) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return result;
};
