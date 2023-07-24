import { Profile, User } from '@prisma/client';
import { EmptyArgs, GraphQLContext } from '../tsTypes/main.js';

type UserProfileResolver = (
  source: User,
  args: EmptyArgs,
  context: GraphQLContext,
) => Promise<Profile | null>;

export const userProfileResolver: UserProfileResolver = async (
  { id },
  _args,
  { profilesLoader },
) => {
  const result = await profilesLoader.load(id);

  return result;
};
