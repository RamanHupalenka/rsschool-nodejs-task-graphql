import { User } from '@prisma/client';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

interface UserFields {
  name: string;
  balance: number;
}

export interface ChangeUserArgs {
  dto: UserFields;
  id: string;
}

type ChangeUserResolver = (
  source: EmptySource,
  args: ChangeUserArgs,
  context: GraphQLContext,
) => Promise<User>;

export const changeUserResolver: ChangeUserResolver = async (
  _source,
  { id, dto },
  { prisma },
) => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: dto,
  });

  return result;
};
