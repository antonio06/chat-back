import { UserCredentials } from '../models';
import { usersComprobation } from './userUtils';

const users: UserCredentials[] = [];

export const addUsersToRoom = (newUser: UserCredentials): boolean => {
  let result = false;

  if (usersComprobation(newUser)) {
    users.push(newUser);
    result = true;
  }

  return result;
}
