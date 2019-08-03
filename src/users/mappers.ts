
const getObjectPropertyBy = <T extends 'userName' | 'userId'>(property: T) => (obj: any) => {
  return getString(obj[property]);
};

export const getUserNameFromBody = getObjectPropertyBy('userName');

export const getUserIdFromQuery = getObjectPropertyBy('userId');

const getString = (str: any): string | null => (
  isValidString(str) ? str : null
);

const isValidString = (str: any) => (
  typeof str === 'string' &&
  str.trim() !== ''
);
