import { userList } from '../mockDatas';
import { UserCredentials } from '../models';

export const login = (newUser: UserCredentials): Promise<boolean> => (
  Promise.resolve(userList.every((user) => existUser(user, newUser)))
);

const existUser = (user: UserCredentials, newUser: UserCredentials) => {
  return user.userName !== newUser.userName;
}
