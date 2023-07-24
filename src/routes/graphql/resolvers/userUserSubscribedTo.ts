import { User } from '@prisma/client';
import { EmptyArgs, GraphQLContext, UserWithSubscriptionsInfo } from '../tsTypes/main.js';

type UserUserSubscribedToResolver = (
  source: UserWithSubscriptionsInfo,
  args: EmptyArgs,
  context: GraphQLContext,
) => Promise<(User | Error | null)[]>;

export const userUserSubscribedToResolver: UserUserSubscribedToResolver = async (
  { userSubscribedTo },
  _args,
  { usersLoader },
) => {
  const followedUsersIds = userSubscribedTo.map((u) => u.authorId);
  const result = await usersLoader.loadMany(followedUsersIds);

  return result;
};
