import { MemberType } from '@prisma/client';
import { MemberTypeId } from '../../member-types/schemas.js';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';

export interface MemberTypeArgs {
  id: MemberTypeId;
}

type MemberTypeResolver = (
  source: EmptySource,
  args: MemberTypeArgs,
  context: GraphQLContext,
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
