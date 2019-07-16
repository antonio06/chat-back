import { User } from '../models';

export const usersComprobation = (users: User[], newUser: User): boolean => (
  users.every((user) => existUser(user, newUser))
);

const existUser = (user: User, newUser: User) => (
  user.userName !== newUser.userName
);
