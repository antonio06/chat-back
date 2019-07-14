import { User } from '../models';
import { usersComprobation } from './userUtils';

const users: User[] = [];

export const addUsersToRoom = (newUser: User | null): Promise<boolean> => {
  if (usersComprobation(users, newUser) && !!newUser) {
    users.push(newUser);
    return Promise.resolve(true);
  }

  return Promise.resolve(false);
}
