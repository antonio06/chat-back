import { Conversation } from '../models/conversation';

const conversationList: Conversation[] = [];

export const addConversation = (newConversation: Conversation): Promise<Conversation[]> => {
  Boolean(newConversation) ?
  conversationList.push(newConversation) :
  conversationList;

  return Promise.resolve(conversationList);
};
