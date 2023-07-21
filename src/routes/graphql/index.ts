import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import {
  graphql,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  validate,
  parse,
} from 'graphql';
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
import { FastifyInstance } from 'fastify';
import { CreatePostInputType } from './inputTypes/createPost.js';
import { CreateUserInputType } from './inputTypes/createUser.js';
import { EmptySource } from './tsTypes/types.js';
import { CreateProfileInputType } from './inputTypes/createProfile.js';
import { VoidType } from './scalarTypes/void.js';
import { ChangeProfileInputType } from './inputTypes/changeProfile.js';
import { ChangePostInputType } from './inputTypes/changePost.js';
import { ChangeUserInputType } from './inputTypes/changeUser.js';
import depthLimit from 'graphql-depth-limit';

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

      const graphqlSchema = new GraphQLSchema({
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
        mutation: new GraphQLObjectType({
          name: 'Mutation',
          fields: {
            createPost: {
              type: PostType,
              args: {
                dto: {
                  type: new GraphQLNonNull(CreatePostInputType),
                },
              },
              resolve: async (
                source: EmptySource,
                args: { dto: { content: string; title: string; authorId: string } },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                const result = await prisma.post.create({
                  data: args.dto,
                });

                return result;
              },
            },
            deletePost: {
              type: VoidType,
              args: {
                id: {
                  type: new GraphQLNonNull(UUIDType),
                },
              },
              resolve: async (
                source: EmptySource,
                args: { id: string },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                await prisma.post.delete({
                  where: {
                    id: args.id,
                  },
                });
              },
            },
            changePost: {
              type: PostType,
              args: {
                id: {
                  type: new GraphQLNonNull(UUIDType),
                },
                dto: {
                  type: new GraphQLNonNull(ChangePostInputType),
                },
              },
              resolve: async (
                source: EmptySource,
                args: { dto: { title: string; content: string }; id: string },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                const result = await prisma.post.update({
                  where: {
                    id: args.id,
                  },
                  data: args.dto,
                });

                return result;
              },
            },
            createUser: {
              type: UserType,
              args: {
                dto: {
                  type: new GraphQLNonNull(CreateUserInputType),
                },
              },
              resolve: async (
                source: EmptySource,
                args: { dto: { name: string; balance: number } },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                const result = await prisma.user.create({
                  data: args.dto,
                });

                return result;
              },
            },
            deleteUser: {
              type: VoidType,
              args: {
                id: {
                  type: new GraphQLNonNull(UUIDType),
                },
              },
              resolve: async (
                source: EmptySource,
                args: { id: string },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                await prisma.user.delete({
                  where: {
                    id: args.id,
                  },
                });
              },
            },
            changeUser: {
              type: UserType,
              args: {
                id: {
                  type: new GraphQLNonNull(UUIDType),
                },
                dto: {
                  type: new GraphQLNonNull(ChangeUserInputType),
                },
              },
              resolve: async (
                source: EmptySource,
                args: { dto: { name: string; balance: number }; id: string },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                const result = await prisma.user.update({
                  where: {
                    id: args.id,
                  },
                  data: args.dto,
                });

                return result;
              },
            },
            createProfile: {
              type: ProfileType,
              args: {
                dto: {
                  type: new GraphQLNonNull(CreateProfileInputType),
                },
              },
              resolve: async (
                source: EmptySource,
                args: {
                  dto: {
                    isMale: boolean;
                    yearOfBirth: number;
                    memberTypeId: string;
                    userId: string;
                  };
                },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                const result = await prisma.profile.create({
                  data: args.dto,
                });

                return result;
              },
            },
            deleteProfile: {
              type: VoidType,
              args: {
                id: {
                  type: new GraphQLNonNull(UUIDType),
                },
              },
              resolve: async (
                source: EmptySource,
                args: {
                  id: string;
                },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                await prisma.profile.delete({
                  where: {
                    id: args.id,
                  },
                });
              },
            },
            changeProfile: {
              type: ProfileType,
              args: {
                id: {
                  type: new GraphQLNonNull(UUIDType),
                },
                dto: {
                  type: new GraphQLNonNull(ChangeProfileInputType),
                },
              },
              resolve: async (
                source: EmptySource,
                args: {
                  dto: { isMale: boolean; yearOfBirth: number; memberTypeId: string };
                  id: string;
                },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                const result = await prisma.profile.update({
                  where: {
                    id: args.id,
                  },
                  data: args.dto,
                });

                return result;
              },
            },
            subscribeTo: {
              type: UserType,
              args: {
                userId: { type: new GraphQLNonNull(UUIDType) },
                authorId: { type: new GraphQLNonNull(UUIDType) },
              },
              resolve: async (
                source: EmptySource,
                args: {
                  userId: string;
                  authorId: string;
                },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                const result = await prisma.user.update({
                  where: {
                    id: args.userId,
                  },
                  data: {
                    userSubscribedTo: {
                      create: {
                        authorId: args.authorId,
                      },
                    },
                  },
                });

                return result;
              },
            },
            unsubscribeFrom: {
              type: VoidType,
              args: {
                userId: { type: new GraphQLNonNull(UUIDType) },
                authorId: { type: new GraphQLNonNull(UUIDType) },
              },
              resolve: async (
                source: EmptySource,
                args: {
                  userId: string;
                  authorId: string;
                },
                ctx: FastifyInstance,
              ) => {
                const { prisma } = ctx;

                await prisma.subscribersOnAuthors.delete({
                  where: {
                    subscriberId_authorId: {
                      subscriberId: args.userId,
                      authorId: args.authorId,
                    },
                  },
                });
              },
            },
          },
        }),
      });

      const validationErrors = validate(graphqlSchema, parse(query), [depthLimit(5)]);

      if (validationErrors.length > 0) {
        return { errors: validationErrors };
      }

      const result = await graphql({
        contextValue: fastify,
        schema: graphqlSchema,
        source: query,
        variableValues: variables,
      });

      return result;
    },
  });
};

export default plugin;
