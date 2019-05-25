import { Conversation } from '../models/conversation';

const conversationList: Conversation[] = [];

export const addConversation = (newConversation: Conversation | null): Promise<Conversation[]> => {
  newConversation !== null ?
  conversationList.push(newConversation) :
  conversationList;

  return Promise.resolve(conversationList);
};
