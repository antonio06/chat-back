import { MessageParams } from '../models';

export const getMessageFromBody = (body: any): MessageParams | null => {
  const userId = getString(body.userId);
  const text = getString(body.text);

  return (userId && text) ?
    { userId, text } :
    null;
};

const getString = (str: any): string | null => (
  isValidString(str) ? str : null
)

const isValidString = (str: any) => (
  typeof str === 'string' &&
  str.trim() !== ''
);
