import { UserCredentials } from '../models';
import { AddUsersToRoom } from './contracts';
import { usersComprobation } from './userUtils';

const users: UserCredentials[] = [];

export const addUsersToRoom: AddUsersToRoom = (newUser: UserCredentials | null): Promise<boolean> => {
  if (usersComprobation(users, newUser) && !!newUser) {
    users.push(newUser);
    return Promise.resolve(true);
  }

  return Promise.resolve(false);
}
