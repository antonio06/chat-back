import { UserCredentials } from '../models';
import { MapperToUserCredential } from './contracts';

export const mapperToUserCredential: MapperToUserCredential = (userName: string): UserCredentials | null => (
  userName !== '' && typeof userName === 'string' ?
    {
      userName
    } :
    null
);
