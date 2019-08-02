export const getUserNameFromBody = (body: any): string | null => {
  return getString(body.userName);
};

export const getUserIdFromQuery = (query: any): string | null => {
  return getString(query.userId);
};

const getString = (str: any): string | null => (
  isValidString(str) ? str : null
);

const isValidString = (str: any) => (
  typeof str === 'string' &&
  str.trim() !== ''
);
