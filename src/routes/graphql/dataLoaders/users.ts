import { PrismaClient } from '@prisma/client';

export const createUsersLoaderBatch =
  (prisma: PrismaClient) => async (ids: readonly string[]) => {
    const idsDeepClone = [...ids];

    const users = await prisma.user.findMany({
      where: {
        id: {
          in: idsDeepClone,
        },
      },
      include: {
        userSubscribedTo: true,
        subscribedToUser: true,
      },
    });

    const sortedUsers = ids.map((id) => users.find((u) => u.id === id) || null);

    return sortedUsers;
  };
