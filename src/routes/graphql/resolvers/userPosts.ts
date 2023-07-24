import { Post, User } from '@prisma/client';
import { EmptyArgs, GraphQLContext } from '../tsTypes/main.js';

type UserPostsResolver = (
  source: User,
  args: EmptyArgs,
  context: GraphQLContext,
) => Promise<Post[]>;

export const userPostsResolver: UserPostsResolver = async (
  { id },
  _args,
  { postsLoader },
) => {
  const result = await postsLoader.load(id);

  return result;
};
