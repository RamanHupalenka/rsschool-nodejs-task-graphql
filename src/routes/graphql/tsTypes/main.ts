import { Post, Profile, MemberType, User, SubscribersOnAuthors } from '@prisma/client';
import DataLoader from 'dataloader';
import { FastifyInstance } from 'fastify';
import { MemberTypeId } from '../../member-types/schemas.js';

export type EmptySource = undefined;
export type EmptyArgs = Record<string, never>;

export type GraphQLContext = FastifyInstance & DataLoaders;

export interface DataLoaders {
  usersLoader: DataLoader<string, User | null>;
  postsLoader: DataLoader<string, Post[]>;
  profilesLoader: DataLoader<string, Profile | null>;
  memberTypesLoader: DataLoader<MemberTypeId, MemberType | null>;
}

export interface UserWithSubscriptionsInfo extends User {
  userSubscribedTo: SubscribersOnAuthors[];
  subscribedToUser: SubscribersOnAuthors[];
}
