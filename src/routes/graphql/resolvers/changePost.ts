import { Post } from '@prisma/client';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

interface PostFields {
  title: string;
  content: string;
}

export interface ChangePostArgs {
  dto: PostFields;
  id: string;
}

type ChangePostResolver = (
  source: EmptySource,
  args: ChangePostArgs,
  context: GraphQLContext,
) => Promise<Post | null>;

export const changePostResolver: ChangePostResolver = async (
  _source,
  { id, dto },
  { prisma },
) => {
  const result = await prisma.post.update({
    where: {
      id,
    },
    data: dto,
  });

  return result;
};
