import { MessageParams } from '../models';
import { getString } from '../utils/strings';

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
