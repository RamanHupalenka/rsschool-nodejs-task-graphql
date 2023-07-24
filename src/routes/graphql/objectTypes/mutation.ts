import { GraphQLObjectType } from 'graphql';
import { changePostField } from '../fields/changePost.js';
import { changeProfileField } from '../fields/changeProfile.js';
import { changeUserField } from '../fields/changeUser.js';
import { createPostField } from '../fields/createPost.js';
import { createProfileField } from '../fields/createProfile.js';
import { createUserField } from '../fields/createUser.js';
import { deletePostField } from '../fields/deletePost.js';
import { deleteProfileField } from '../fields/deleteProfile.js';
import { deleteUserField } from '../fields/deleteUser.js';
import { subscribeToField } from '../fields/subscribeTo.js';
import { unsubscribeFromField } from '../fields/unsubscribeFrom.js';

export const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createPost: createPostField,
    deletePost: deletePostField,
    changePost: changePostField,
    createUser: createUserField,
    deleteUser: deleteUserField,
    changeUser: changeUserField,
    createProfile: createProfileField,
    deleteProfile: deleteProfileField,
    changeProfile: changeProfileField,
    subscribeTo: subscribeToField,
    unsubscribeFrom: unsubscribeFromField,
  },
});
