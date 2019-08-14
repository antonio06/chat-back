export const getString = (str: any): string | null => (
  isValidString(str) ? str : null
);

const isValidString = (str: any) => (
  typeof str === 'string' &&
  str.trim() !== ''
);
