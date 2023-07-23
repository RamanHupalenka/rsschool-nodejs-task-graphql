import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export interface UnsubscribeFromArgs {
  userId: string;
  authorId: string;
}

type UnsubscribeFromResolver = (
  source: EmptySource,
  args: UnsubscribeFromArgs,
  context: GraphQLContext,
) => Promise<void>;

export const unsubscribeFromResolver: UnsubscribeFromResolver = async (
  _source,
  { userId, authorId },
  { prisma },
) => {
  await prisma.subscribersOnAuthors.delete({
    where: {
      subscriberId_authorId: {
        subscriberId: userId,
        authorId,
      },
    },
  });
};
