import { UserCredentials } from '../models';
import { usersComprobation } from './userUtils';

const users: UserCredentials[] = [];

export const addUsersToRoom = (newUser: UserCredentials): Promise<boolean> => {

  if (usersComprobation(newUser)) {
    users.push(newUser);
    return Promise.resolve(true);
  }

  return Promise.resolve(false);
}
