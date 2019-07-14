import { Conversation } from '../models';

export const mapperToConversation = (id: number, name: string, message: string): Conversation | null => (
  Boolean(id) && Boolean(name) && Boolean(message) ?
    {
      id,
      name,
      message,
    } :
    null
);
