import { User } from '@prisma/client';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export interface UserArgs {
  id: string;
}

type UserResolver = (
  source: EmptySource,
  args: UserArgs,
  context: GraphQLContext,
) => Promise<User | null>;

export const userResolver: UserResolver = async (_source, { id }, { usersLoader }) => {
  const result = await usersLoader.load(id);

  return result;
};
