import { v4 } from 'uuid';
import { MessageParams } from '../models';
import { Message } from '../models/message';

const conversation: Message[] = [];

const addMessage = async (messageParams: MessageParams): Promise<Message> => {
  const message = createMessage(messageParams);
  conversation.push(message);

  return message;
}

const createMessage = (messageParams: MessageParams): Message => ({
  ...messageParams,
  id: v4(),
})

export const service = {
  addMessage
};
