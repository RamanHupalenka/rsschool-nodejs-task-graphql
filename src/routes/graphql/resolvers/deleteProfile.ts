import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export interface DeleteProfileArgs {
  id: string;
}

type DeleteProfileResolver = (
  source: EmptySource,
  args: DeleteProfileArgs,
  context: GraphQLContext,
) => Promise<void>;

export const deleteProfileResolver: DeleteProfileResolver = async (
  _source,
  { id },
  { prisma },
) => {
  await prisma.profile.delete({
    where: {
      id,
    },
  });
};
