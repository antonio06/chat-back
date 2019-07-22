import { v4 } from 'uuid';
import { User } from '../models';

const users: User[] = [];

const addUser = async (userName: string): Promise<User> => {
  const user = createUser(userName);
  users.push(user);

  return user;
};

const createUser = (userName: string): User => ({
  id: v4(),
  userName,
});

const userNameExist = (userName: string): boolean => (
  users.some((user) => user.userName === userName)
);

export const service = {
  addUser,
  userNameExist,
};
