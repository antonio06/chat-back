import { getString } from '../utils/strings';

const getUserPropertyBy = <T extends 'userName' | 'userId'>(property: T) => (obj: any) => {
  return getString(obj[property]);
};

export const getUserNameFromBody = getUserPropertyBy('userName');

export const getUserIdFromQuery = getUserPropertyBy('userId');
