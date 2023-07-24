import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { UserType } from '../objectTypes/user.js';
import { usersResolver } from '../resolvers/users.js';
import { EmptyArgs, EmptySource, GraphQLContext } from '../tsTypes/main.js';

export const usersField: GraphQLFieldConfig<EmptySource, GraphQLContext, EmptyArgs> = {
  type: new GraphQLNonNull(new GraphQLList(UserType)),
  resolve: usersResolver,
};
