import { PrismaClient } from '@prisma/client';
import DataLoader from 'dataloader';
import { DataLoaders } from '../tsTypes/main.js';
import { createMemberTypesLoaderBatch } from './memberTypes.js';
import { createPostsLoaderBatch } from './posts.js';
import { createProfilesLoaderBatch } from './profiles.js';
import { createUsersLoaderBatch } from './users.js';

export const getDataLoaders = (prisma: PrismaClient): DataLoaders => {
  const usersLoader = new DataLoader(createUsersLoaderBatch(prisma));
  const postsLoader = new DataLoader(createPostsLoaderBatch(prisma));
  const profilesLoader = new DataLoader(createProfilesLoaderBatch(prisma));
  const memberTypesLoader = new DataLoader(createMemberTypesLoaderBatch(prisma));

  return {
    usersLoader,
    postsLoader,
    profilesLoader,
    memberTypesLoader,
  };
};
