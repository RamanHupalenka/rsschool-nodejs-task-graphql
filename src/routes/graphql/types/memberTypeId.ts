import { GraphQLEnumType } from 'graphql';

export const MemberTypeIdType = new GraphQLEnumType({
  name: 'MemberTypeId',
  values: {
    BASIC: {
      value: 'basic',
    },
    BUSINESS: {
      value: 'business',
    },
  },
});
