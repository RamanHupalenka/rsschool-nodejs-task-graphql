import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export interface DeletePostArgs {
  id: string;
}

type DeletePostResolver = (
  source: EmptySource,
  args: DeletePostArgs,
  context: GraphQLContext,
) => Promise<void>;

export const deletePostResolver: DeletePostResolver = async (
  _source,
  { id },
  { prisma },
) => {
  await prisma.post.delete({
    where: {
      id,
    },
  });
};
