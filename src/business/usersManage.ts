import { UserCredentials } from '../models';
import { usersComprobation } from './userUtils';

const users: UserCredentials[] = [];

export const addUsersToRoom = (newUser: UserCredentials | null): Promise<boolean> => {
  if (usersComprobation(users, newUser)) {
    if (newUser !== null) {
      users.push(newUser);
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }

  return Promise.resolve(false);
}
