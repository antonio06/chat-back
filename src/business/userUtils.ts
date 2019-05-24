import { UserCredentials } from '../models';

export const usersComprobation = (userList: UserCredentials[], newUser: UserCredentials | null): boolean => (
  userList.every((user) => existUser(user, newUser))
);

const existUser = (user: UserCredentials, newUser: UserCredentials | null) => (
  newUser !== null && user.userName !== newUser.userName
);
