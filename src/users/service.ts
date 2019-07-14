import { User } from '../models';

const users: User[] = [];

export const addUsersToRoom = async (newUser: User): Promise<void> => {
  users.push(newUser);
}
