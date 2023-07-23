import { User } from '@prisma/client';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

interface UserFields {
  name: string;
  balance: number;
}

export interface CreateUserArgs {
  dto: UserFields;
}

type CreateUserResolver = (
  source: EmptySource,
  args: CreateUserArgs,
  context: GraphQLContext,
) => Promise<User>;

export const createUserResolver: CreateUserResolver = async (
  _source,
  { dto },
  { prisma },
) => {
  const result = await prisma.user.create({
    data: dto,
  });

  return result;
};
