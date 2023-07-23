import { MemberType } from '@prisma/client';
import { EmptySource, EmptyArgs, GraphQLContext } from '../tsTypes/main.js';

type MemberTypesResolver = (
  source: EmptySource,
  args: EmptyArgs,
  context: GraphQLContext,
) => Promise<MemberType[]>;

export const memberTypesResolver: MemberTypesResolver = async (
  _source,
  _args,
  { prisma },
) => {
  const result = await prisma.memberType.findMany();

  return result;
};
