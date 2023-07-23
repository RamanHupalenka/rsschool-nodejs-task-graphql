import { Profile } from '@prisma/client';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

interface ProfileFields {
  isMale: boolean;
  yearOfBirth: number;
  memberTypeId: string;
}

export interface ChangeProfileArgs {
  dto: ProfileFields;
  id: string;
}

type ChangeProfileResolver = (
  source: EmptySource,
  args: ChangeProfileArgs,
  context: GraphQLContext,
) => Promise<Profile>;

export const changeProfileResolver: ChangeProfileResolver = async (
  _source,
  { id, dto },
  { prisma },
) => {
  const result = await prisma.profile.update({
    where: {
      id,
    },
    data: dto,
  });

  return result;
};
