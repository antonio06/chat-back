import { v4 } from 'uuid';
import { User } from '../models';

const users: User[] = [];

const addUser = async (userName: string): Promise<void> => {
  const user = createUser(userName);
  users.push(user)
}

const createUser = (userName: string): User => ({
  id: v4(),
  userName
});

const userNameExist = (userName: string): boolean => (
  users.every((user) => user.userName !== userName)
);

export const service = {
  addUser,
  userNameExist
}
