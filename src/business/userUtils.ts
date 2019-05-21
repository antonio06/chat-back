import { userList } from '../mockDatas';
import { UserCredentials } from '../models';

export const usersComprobation = (newUser: UserCredentials): boolean => (
  userList.every((user) => existUser(user, newUser))
);

const existUser = (user: UserCredentials, newUser: UserCredentials) => (
  user.userName !== newUser.userName
);
