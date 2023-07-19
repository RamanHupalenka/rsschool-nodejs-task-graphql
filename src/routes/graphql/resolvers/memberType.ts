import { MemberType } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptySource } from '../tsTypes/types.js';

export interface MemberTypeArgs {
  id: string;
}

type MemberTypeResolver = (
  source: EmptySource,
  args: MemberTypeArgs,
  context: FastifyInstance,
) => Promise<MemberType | null>;

export const memberTypeResolver: MemberTypeResolver = async (
  _source,
  { id },
  { prisma },
) => {
  const result = await prisma.memberType.findUnique({
    where: {
      id,
    },
  });

  return result;
};
