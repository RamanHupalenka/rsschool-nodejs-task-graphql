import { MemberType, Profile } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptyArgs } from '../tsTypes/types.js';

type ProfileMemberTypeResolver = (
  source: Profile,
  args: EmptyArgs,
  context: FastifyInstance,
) => Promise<MemberType | null>;

export const profileMemberTypeResolver: ProfileMemberTypeResolver = async (
  { memberTypeId },
  _args,
  { prisma },
) => {
  const result = await prisma.memberType.findUnique({
    where: {
      id: memberTypeId,
    },
  });

  return result;
};
