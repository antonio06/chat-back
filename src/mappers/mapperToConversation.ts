import { Conversation } from '../models';
import { MapperToConversation } from './contracts';

export const mapperToConversation: MapperToConversation = (id: number, name: string, message: string): Conversation | null => (
  Boolean(id) && Boolean(name) && Boolean(message) ?
    {
      id,
      name,
      message,
    } :
    null
);
