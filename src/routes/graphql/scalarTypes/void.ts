import { GraphQLScalarType } from 'graphql';

export const VoidType = new GraphQLScalarType({
  name: 'Void',
  serialize() {
    return null;
  },
  parseValue() {
    return null;
  },
  parseLiteral() {
    return null;
  },
});
