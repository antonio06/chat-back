import { v4 } from 'uuid';
import { emptyUser, User } from '../models';

const users: User[] = [];

const addUser = async (userName: string | null): Promise<User> => {
  const user = createUser(userName);
  users.push(user);

  return user;
};

const createUser = (userName: string | null): User => {
  return userName !== null ? {
    id: v4(),
    userName,
  } : emptyUser();
};

const userNameExist = (userName: string | null): boolean => (
  users.some((user) => user.userName === userName)
);

export const service = {
  addUser,
  userNameExist,
};
