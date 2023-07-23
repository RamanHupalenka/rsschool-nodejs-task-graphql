import { PrismaClient } from '@prisma/client';

export const createMemberTypesLoaderBatch =
  (prisma: PrismaClient) => async (ids: readonly string[]) => {
    const idsDeepClone = [...ids];

    const memberTypes = await prisma.memberType.findMany({
      where: {
        id: {
          in: idsDeepClone,
        },
      },
    });

    const sortedMemberTypes = ids.map(
      (id) => memberTypes.find((mt) => mt.id === id) || null,
    );

    return sortedMemberTypes;
  };
