import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import { graphql, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { MemberTypeIdType } from './scalarTypes/memberTypeId.js';
import { UUIDType } from './scalarTypes/uuid.js';
import { memberTypeField } from './fields/memberType.js';
import { memberTypesField } from './fields/memberTypes.js';
import { postField } from './fields/post.js';
import { postsField } from './fields/posts.js';
import { profileField } from './fields/profile.js';
import { profilesField } from './fields/profiles.js';
import { userField } from './fields/user.js';
import { usersField } from './fields/users.js';
import { MemberTypeType } from './objectTypes/memberType.js';
import { PostType } from './objectTypes/post.js';
import { ProfileType } from './objectTypes/profile.js';
import { UserType } from './objectTypes/user.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req) {
      const { query, variables } = req.body;

      const result = await graphql({
        contextValue: fastify,
        schema: new GraphQLSchema({
          types: [
            UUIDType,
            MemberTypeIdType,
            MemberTypeType,
            PostType,
            ProfileType,
            UserType,
          ],
          query: new GraphQLObjectType({
            name: 'Query',
            fields: {
              memberType: memberTypeField,
              memberTypes: memberTypesField,
              post: postField,
              posts: postsField,
              profile: profileField,
              profiles: profilesField,
              user: userField,
              users: usersField,
            },
          }),
        }),
        source: query,
        variableValues: variables,
      });

      return result;
    },
  });
};

export default plugin;
