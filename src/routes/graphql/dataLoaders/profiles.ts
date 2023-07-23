import { PrismaClient } from '@prisma/client';

export const createProfilesLoaderBatch =
  (prisma: PrismaClient) => async (ids: readonly string[]) => {
    const idsDeepClone = [...ids];

    const profiles = await prisma.profile.findMany({
      where: {
        userId: {
          in: idsDeepClone,
        },
      },
    });

    const sortedProfiles = ids.map((id) => profiles.find((p) => p.userId === id) || null);

    return sortedProfiles;
  };
