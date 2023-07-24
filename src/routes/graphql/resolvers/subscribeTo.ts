import { User } from '@prisma/client';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export interface SubscribeToArgs {
  userId: string;
  authorId: string;
}

type SubscribeToResolver = (
  source: EmptySource,
  args: SubscribeToArgs,
  context: GraphQLContext,
) => Promise<User>;

export const subscribeToResolver: SubscribeToResolver = async (
  _source,
  { userId, authorId },
  { prisma },
) => {
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      userSubscribedTo: {
        create: {
          authorId,
        },
      },
    },
  });

  return result;
};
