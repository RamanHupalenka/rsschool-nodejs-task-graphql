import { Profile } from '@prisma/client';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export interface ProfileArgs {
  id: string;
}

type ProfileResolver = (
  source: EmptySource,
  args: ProfileArgs,
  context: GraphQLContext,
) => Promise<Profile | null>;

export const profileResolver: ProfileResolver = async (_source, { id }, { prisma }) => {
  const result = await prisma.profile.findUnique({
    where: {
      id,
    },
  });

  return result;
};
