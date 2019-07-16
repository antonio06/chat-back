import { User } from '../models';

const users: User[] = [];

const addUsersToRoom = async (user: User): Promise<void> => {
  users.push(user)
}

export const userService = {
  users,
  addUsersToRoom
}
