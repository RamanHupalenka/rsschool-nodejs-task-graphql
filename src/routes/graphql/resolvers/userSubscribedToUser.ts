import { User } from '@prisma/client';
import { EmptyArgs, GraphQLContext, UserWithSubscriptionsInfo } from '../tsTypes/main.js';

type UserSubscribedToUserResolver = (
  source: UserWithSubscriptionsInfo,
  args: EmptyArgs,
  context: GraphQLContext,
) => Promise<(User | Error | null)[]>;

export const userSubscribedToUserResolver: UserSubscribedToUserResolver = async (
  { subscribedToUser },
  _args,
  { usersLoader },
) => {
  const followersUsersIds = subscribedToUser.map((u) => u.subscriberId);
  const result = await usersLoader.loadMany(followersUsersIds);

  return result;
};
