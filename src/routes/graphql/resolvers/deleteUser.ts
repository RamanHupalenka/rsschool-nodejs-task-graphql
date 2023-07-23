import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export interface DeleteUserArgs {
  id: string;
}

type DeleteUserResolver = (
  source: EmptySource,
  args: DeleteUserArgs,
  context: GraphQLContext,
) => Promise<void>;

export const deleteUserResolver: DeleteUserResolver = async (
  _source,
  { id },
  { prisma },
) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
};
