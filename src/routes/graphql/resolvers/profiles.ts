import { Profile } from '@prisma/client';
import { EmptySource, EmptyArgs, GraphQLContext } from '../tsTypes/main.js';

type ProfilesResolver = (
  source: EmptySource,
  args: EmptyArgs,
  context: GraphQLContext,
) => Promise<Profile[]>;

export const profilesResolver: ProfilesResolver = async (_source, _args, { prisma }) => {
  const result = await prisma.profile.findMany();

  return result;
};
