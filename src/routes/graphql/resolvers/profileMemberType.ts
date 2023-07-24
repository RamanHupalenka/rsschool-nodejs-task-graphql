import { MemberType, Profile } from '@prisma/client';
import { MemberTypeId } from '../../member-types/schemas.js';
import { EmptyArgs, GraphQLContext } from '../tsTypes/main.js';

type ProfileMemberTypeResolver = (
  source: Profile,
  args: EmptyArgs,
  context: GraphQLContext,
) => Promise<MemberType | null>;

export const profileMemberTypeResolver: ProfileMemberTypeResolver = async (
  { memberTypeId },
  _args,
  { memberTypesLoader },
) => {
  const result = await memberTypesLoader.load(memberTypeId as MemberTypeId);

  return result;
};
