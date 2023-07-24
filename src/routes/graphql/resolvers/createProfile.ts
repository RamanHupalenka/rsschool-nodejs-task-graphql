import { Profile } from '@prisma/client';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

interface ProfileFields {
  isMale: boolean;
  yearOfBirth: number;
  memberTypeId: string;
  userId: string;
}

export interface CreateProfileArgs {
  dto: ProfileFields;
}

type CreateProfileResolver = (
  source: EmptySource,
  args: CreateProfileArgs,
  context: GraphQLContext,
) => Promise<Profile>;

export const createProfileResolver: CreateProfileResolver = async (
  _source,
  { dto },
  { prisma },
) => {
  const result = await prisma.profile.create({
    data: dto,
  });

  return result;
};
