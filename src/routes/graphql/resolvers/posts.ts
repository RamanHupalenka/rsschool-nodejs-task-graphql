import { Post } from '@prisma/client';
import { EmptySource, EmptyArgs, GraphQLContext } from '../tsTypes/main.js';

type PostsResolver = (
  source: EmptySource,
  args: EmptyArgs,
  context: GraphQLContext,
) => Promise<Post[]>;

export const postsResolver: PostsResolver = async (_source, _args, { prisma }) => {
  const result = await prisma.post.findMany();

  return result;
};
