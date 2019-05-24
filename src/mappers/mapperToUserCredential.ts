import { UserCredentials } from '../models';

export const mapperToUserCredential = (userName: string): UserCredentials | null => (
  userName !== '' && typeof userName === 'string' ?
    {
      userName
    } :
    null
);
