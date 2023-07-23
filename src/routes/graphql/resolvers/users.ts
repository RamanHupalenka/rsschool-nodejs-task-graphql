import { User } from '@prisma/client';
import { GraphQLList, GraphQLResolveInfo } from 'graphql';
import {
  parseResolveInfo,
  ResolveTree,
  simplifyParsedResolveInfoFragmentWithType,
} from 'graphql-parse-resolve-info';
import { UserType } from '../objectTypes/user.js';
import { EmptySource, EmptyArgs, GraphQLContext } from '../tsTypes/main.js';

interface ParsedResolveInfoFields {
  fields: {
    [key: string]: ResolveTree | undefined;
  };
}

type UsersResolver = (
  source: EmptySource,
  args: EmptyArgs,
  context: GraphQLContext,
  info: GraphQLResolveInfo,
) => Promise<User[]>;

export const usersResolver: UsersResolver = async (
  _source,
  _args,
  { prisma, usersLoader },
  info,
) => {
  const parsedResolveInfoFragment = parseResolveInfo(info) as ResolveTree;
  const { fields }: ParsedResolveInfoFields = simplifyParsedResolveInfoFragmentWithType(
    parsedResolveInfoFragment,
    new GraphQLList(UserType),
  );

  const users = await prisma.user.findMany({
    include: {
      userSubscribedTo: !!fields.userSubscribedTo,
      subscribedToUser: !!fields.subscribedToUser,
    },
  });

  users.forEach((user) => {
    usersLoader.prime(user.id, user);
  });

  return users;
};
