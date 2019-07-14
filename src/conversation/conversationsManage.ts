import { Message } from '../models/message';

const conversationList: Message[] = [];

export const addConversation = (newConversation: Message | null): Promise<Message[]> => {
  newConversation !== null ?
    conversationList.push(newConversation) :
    conversationList;

  return Promise.resolve(conversationList);
};
