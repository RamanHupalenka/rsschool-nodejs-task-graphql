import { Post } from '@prisma/client';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

interface PostFields {
  content: string;
  title: string;
  authorId: string;
}

export interface CreatePostArgs {
  dto: PostFields;
}

type CreatePostResolver = (
  source: EmptySource,
  args: CreatePostArgs,
  context: GraphQLContext,
) => Promise<Post>;

export const createPostResolver: CreatePostResolver = async (
  _source,
  { dto },
  { prisma },
) => {
  const result = await prisma.post.create({
    data: dto,
  });

  return result;
};
