import { UserCredentials } from '../models';
import { usersComprobation } from './userUtils';

const users: UserCredentials[] = [];

export const addUsersToRoom = (newUser: UserCredentials | null): Promise<boolean> => {
  if (usersComprobation(users, newUser) && !!newUser) {
    users.push(newUser);
    return Promise.resolve(true);
  }

  return Promise.resolve(false);
}
