import { Conversation } from '../models/conversation';
import { AddConversation } from './contracts';

const conversationList: Conversation[] = [];

export const addConversation: AddConversation = (newConversation: Conversation | null): Promise<Conversation[]> => {
  newConversation !== null ?
    conversationList.push(newConversation) :
    conversationList;

  return Promise.resolve(conversationList);
};
