import { Type } from '@fastify/type-provider-typebox';
import { GraphQLSchema } from 'graphql';
import { ChangePostInputType } from './inputTypes/changePost.js';
import { CreatePostInputType } from './inputTypes/createPost.js';
import { CreateProfileInputType } from './inputTypes/createProfile.js';
import { CreateUserInputType } from './inputTypes/createUser.js';
import { MemberTypeType } from './objectTypes/memberType.js';
import { MutationType } from './objectTypes/mutation.js';
import { PostType } from './objectTypes/post.js';
import { ProfileType } from './objectTypes/profile.js';
import { QueryType } from './objectTypes/query.js';
import { UserType } from './objectTypes/user.js';
import { MemberTypeIdType } from './scalarTypes/memberTypeId.js';
import { UUIDType } from './scalarTypes/uuid.js';
import { VoidType } from './scalarTypes/void.js';

export const gqlResponseSchema = Type.Partial(
  Type.Object({
    data: Type.Any(),
    errors: Type.Any(),
  }),
);

export const createGqlResponseSchema = {
  body: Type.Object(
    {
      query: Type.String(),
      variables: Type.Optional(Type.Record(Type.String(), Type.Any())),
    },
    {
      additionalProperties: false,
    },
  ),
};

export const graphqlSchema = new GraphQLSchema({
  types: [
    UUIDType,
    MemberTypeIdType,
    MemberTypeType,
    PostType,
    ProfileType,
    UserType,
    CreatePostInputType,
    CreateUserInputType,
    CreateProfileInputType,
    VoidType,
    ChangePostInputType,
  ],
  query: QueryType,
  mutation: MutationType,
});
