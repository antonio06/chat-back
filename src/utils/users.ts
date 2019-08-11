import { MessageParams } from '../models';

const getUserPropertyBy = <T extends 'userName' | 'userId'>(property: T) => (obj: any) => {
  return getString(obj[property]);
};

export const getMessagePropertyBy = (obj: any): MessageParams | null => {
  const property = {
    userId: 'userId',
    text: 'text',
  };

  const userId = getString(obj[property.userId]);
  const text = getString(obj[property.text]);

  return (userId && text) ?
    { userId, text } :
    null;
};

export const getUserNameFromBody = getUserPropertyBy('userName');

export const getUserIdFromQuery = getUserPropertyBy('userId');

const getString = (str: any): string | null => (
  isValidString(str) ? str : null
);

const isValidString = (str: any) => (
  typeof str === 'string' &&
  str.trim() !== ''
);
