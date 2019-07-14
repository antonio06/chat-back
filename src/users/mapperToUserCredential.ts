import { User } from '../models';

export const mapperToUserCredential = (userName: string): User | null => (
  userName !== '' && typeof userName === 'string' ?
    {
      userName
    } :
    null
);
