import { User } from '../models';

export const usersComprobation = (userList: User[], newUser: User | null): boolean => (
  userList.every((user) => existUser(user, newUser))
);

const existUser = (user: User, newUser: User | null) => (
  newUser !== null && user.userName !== newUser.userName
);
