import { v4 } from 'uuid';
import { User } from '../models';

const users: User[] = [];

export const addUsersToRoom = async (usernName: string): Promise<void> => {
  const user = createUser(usernName);
  users.push(user);
}

const createUser = (userName: string): User => ({
  id: v4(),
  userName
})
