import { MemberType } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { EmptySource, EmptyArgs } from '../tsTypes/types.js';

type MemberTypesResolver = (
  source: EmptySource,
  args: EmptyArgs,
  context: FastifyInstance,
) => Promise<MemberType[] | null>;

export const memberTypesResolver: MemberTypesResolver = async (
  _source,
  _args,
  { prisma },
) => {
  const result = await prisma.memberType.findMany();

  return result;
};
