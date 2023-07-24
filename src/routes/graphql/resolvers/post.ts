import { Post } from '@prisma/client';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export interface PostArgs {
  id: string;
}

type PostResolver = (
  source: EmptySource,
  args: PostArgs,
  context: GraphQLContext,
) => Promise<Post | null>;

export const postResolver: PostResolver = async (_source, { id }, { prisma }) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return result;
};
