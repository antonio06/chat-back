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

const userExistBy = <T extends keyof User>(property: T) => (value: User[T]): boolean => (
  users.some((user) => user[property] === value)
);

const getUserByUserId = (userId: string): User | null => {
  const filteredUser = users.find((user) => user.id === userId);

  return filteredUser !== undefined ? filteredUser : null;
};

const userNameExist = userExistBy('userName');

const userIdExist = userExistBy('id');

export const service = {
  addUser,
  userIdExist,
  getUserByUserId,
  userNameExist,
};
