import { GraphQLObjectType } from 'graphql';
import { memberTypeField } from '../fields/memberType.js';
import { memberTypesField } from '../fields/memberTypes.js';
import { postField } from '../fields/post.js';
import { postsField } from '../fields/posts.js';
import { profileField } from '../fields/profile.js';
import { profilesField } from '../fields/profiles.js';
import { userField } from '../fields/user.js';
import { usersField } from '../fields/users.js';

export const QueryType = new GraphQLObjectType({
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
});
