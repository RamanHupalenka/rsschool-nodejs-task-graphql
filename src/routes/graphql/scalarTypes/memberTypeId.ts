import { GraphQLScalarType, Kind } from 'graphql';
import { MemberTypeId } from '../../member-types/schemas.js';

const isMemberTypeId = (value: unknown): value is MemberTypeId =>
  typeof value === 'string' &&
  (value === MemberTypeId.BASIC || value === MemberTypeId.BUSINESS);

export const MemberTypeIdType = new GraphQLScalarType({
  name: 'MemberTypeId',
  serialize(value) {
    if (!isMemberTypeId(value)) {
      throw new TypeError(`Invalid MemberTypeId.`);
    }

    return value;
  },
  parseValue(value) {
    if (!isMemberTypeId(value)) {
      throw new TypeError(`Invalid MemberTypeId.`);
    }

    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING && isMemberTypeId(ast.value)) {
      return ast.value;
    }

    return undefined;
  },
});
