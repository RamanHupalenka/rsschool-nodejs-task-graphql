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

// interface ProfileCombined extends Profile {
//   memberType: MemberType | null;
// }

// interface UserCombined extends User {
//   posts: Post[] | null;
//   profile: ProfileCombined | null;
// }

// const combineUserRelations = async (
//   prisma: PrismaClient,
//   user: User,
// ) /* : Promise<UserCombined | null> */ => {
//   const profile = await prisma.profile.findUnique({
//     where: {
//       userId: user.id,
//     },
//   });

//   const memberType = profile?.memberTypeId
//     ? await prisma.memberType.findUnique({
//         where: {
//           id: profile.memberTypeId,
//         },
//       })
//     : null;

//   const posts = await prisma.post.findMany({
//     where: {
//       authorId: user.id,
//     },
//   });

//   const userSubscribedTo = (
//     await prisma.user.findMany({
//       where: {
//         NOT: {
//           id: user.id,
//         },
//         subscribedToUser: {
//           some: {
//             subscriberId: user.id,
//           },
//         },
//       },
//     })
//   ).map(async (user) => {
//     const result = await prisma.user.findMany({
//       where: {
//         NOT: {
//           id: user.id,
//         },
//         userSubscribedTo: {
//           some: {
//             authorId: user.id,
//           },
//         },
//       },
//     });

//     Object.assign(user, { subscribedToUser: result });

//     return user;
//   });

//   const subscribedToUser = (
//     await prisma.user.findMany({
//       where: {
//         NOT: {
//           id: user.id,
//         },
//         userSubscribedTo: {
//           some: {
//             authorId: user.id,
//           },
//         },
//       },
//     })
//   ).map(async (user) => {
//     const result = await prisma.user.findMany({
//       where: {
//         NOT: {
//           id: user.id,
//         },
//         subscribedToUser: {
//           some: {
//             subscriberId: user.id,
//           },
//         },
//       },
//     });

//     Object.assign(user, { userSubscribedTo: result });

//     return user;
//   });

//   if (profile) {
//     Object.assign(profile, { memberType });
//   }

//   Object.assign(user, { posts });
//   Object.assign(user, { profile });
//   Object.assign(user, { userSubscribedTo });
//   Object.assign(user, { subscribedToUser });

//   return user;
// };

// const getResolvers = (prisma: PrismaClient) => ({
//   UUID: UUIDType,
//   MemberTypeId: MemberTypeIdType,
//   memberTypes: async () => {
//     const result = await prisma.memberType.findMany();

//     return result;
//   },
//   memberType: async ({ id }: { id: string }) => {
//     const result = await prisma.memberType.findUnique({
//       where: {
//         id,
//       },
//     });

//     return result;
//   },
//   posts: async () => {
//     const result = await prisma.post.findMany();

//     return result;
//   },
//   post: async ({ id }: { id: string }) => {
//     const result = await prisma.post.findUnique({
//       where: {
//         id,
//       },
//     });

//     return result;
//   },
//   users: async () => {
//     const users = await prisma.user.findMany();
//     const promisesList = users?.map((user) => combineUserRelations(prisma, user));
//     const results = await Promise.all(promisesList);

//     return results;
//   },
//   user: async ({ id }: { id: string }) => {
//     const user = await prisma.user.findUnique({
//       where: {
//         id,
//       },
//     });

//     if (!user) return user;

//     const result = await combineUserRelations(prisma, user);

//     return result;
//   },
//   profiles: async () => {
//     const result = await prisma.profile.findMany();

//     return result;
//   },
//   profile: async ({ id }: { id: string }) => {
//     const result = await prisma.profile.findUnique({
//       where: {
//         id,
//       },
//     });

//     return result;
//   },
// });

// const schema = buildSchema(`
//   type Query {
//     memberTypes: [MemberType!]!
//     posts: [Post!]!
//     users: [User!]!
//     profiles: [Profile!]!
//     memberType(id: MemberTypeId!): MemberType
//     post(id: UUID!): Post
//     user(id: UUID!): User
//     profile(id: UUID!): Profile
//   }
// `);

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
