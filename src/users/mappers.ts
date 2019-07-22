export const getUserNameFromBody = (body: any): string | null => {
  const userName = getString(body.userName);

  return (userName) ?
    userName :
    null;
};

const getString = (str: any): string | null => (
  isValidString(str) ? str : null
);

const isValidString = (str: any) => (
  typeof str === 'string' &&
  str.trim() !== ''
);
