import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import { buildSchema, graphql } from 'graphql';
import { PrismaClient } from '@prisma/client';
import { UUIDType } from './types/uuid.js';
import { MemberTypeIdType } from './types/memberTypeId.js';

const getResolvers = (prisma: PrismaClient) => ({
  UUID: UUIDType,
  MemberTypeId: MemberTypeIdType,
  memberTypes: async () => {
    return await prisma.memberType.findMany();
  },
  memberType: async ({ id }: { id: string }) => {
    return await prisma.memberType.findUnique({
      where: {
        id,
      },
    });
  },
  posts: async () => {
    return await prisma.post.findMany();
  },
  post: async ({ id }: { id: string }) => {
    return await prisma.post.findUnique({
      where: {
        id,
      },
    });
  },
  users: async () => {
    return await prisma.user.findMany();
  },
  user: async ({ id }: { id: string }) => {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  },
  profiles: async () => {
    return await prisma.profile.findMany();
  },
  profile: async ({ id }: { id: string }) => {
    return await prisma.profile.findUnique({
      where: {
        id,
      },
    });
  },
});

const schema = buildSchema(`
  scalar UUID
  scalar MemberTypeId

  type Query {
    memberTypes: [MemberType!]!
    posts: [Post!]!
    users: [User!]!
    profiles: [Profile!]!
    memberType(id: MemberTypeId!): MemberType!
    post(id: UUID!): Post!
    user(id: UUID!): User!
    profile(id: UUID!): Profile!
  }

  type MemberType {
    id: MemberTypeId!
    discount: Float
    postsLimitPerMonth: Int
  }

  type Post {
    id: UUID!
    title: String
    content: String
    authorId: UUID
  }

  type User {
    id: UUID!
    name: String
    balance: Float
  }

  type Profile {
    id: UUID!
    isMale: Boolean
    yearOfBirth: Int
    userId: UUID
    memberTypeId: MemberTypeId
  }
`);

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
        rootValue: getResolvers(fastify.prisma),
        source: query,
        variableValues: variables,
        schema,
      });

      return result;
    },
  });
};

export default plugin;
