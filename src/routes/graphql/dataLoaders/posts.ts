import { PrismaClient } from '@prisma/client';

export const createPostsLoaderBatch =
  (prisma: PrismaClient) => async (ids: readonly string[]) => {
    const idsDeepClone = [...ids];

    const posts = await prisma.post.findMany({
      where: {
        authorId: {
          in: idsDeepClone,
        },
      },
    });

    const sortedPosts = ids.map((id) => posts.filter((p) => p.authorId === id));

    return sortedPosts;
  };
