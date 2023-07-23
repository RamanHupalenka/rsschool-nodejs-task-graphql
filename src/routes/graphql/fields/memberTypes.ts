import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { EmptyArgs, EmptySource, GraphQLContext } from '../tsTypes/main.js';
import { memberTypesResolver } from '../resolvers/memberTypes.js';
import { MemberTypeType } from '../objectTypes/memberType.js';

export const memberTypesField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  EmptyArgs
> = {
  type: new GraphQLNonNull(new GraphQLList(MemberTypeType)),
  resolve: memberTypesResolver,
};
