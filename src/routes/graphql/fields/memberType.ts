import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';
import { EmptySource, GraphQLContext } from '../tsTypes/main.js';
import { MemberTypeArgs, memberTypeResolver } from '../resolvers/memberType.js';
import { MemberTypeType } from '../objectTypes/memberType.js';
import { MemberTypeIdType } from '../scalarTypes/memberTypeId.js';

export const memberTypeField: GraphQLFieldConfig<
  EmptySource,
  GraphQLContext,
  MemberTypeArgs
> = {
  type: MemberTypeType,
  args: {
    id: {
      type: new GraphQLNonNull(MemberTypeIdType),
    },
  },
  resolve: memberTypeResolver,
};
