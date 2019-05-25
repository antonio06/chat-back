import * as business from '../business';
import { Conversation } from '../models';

export const addConversationController = (conversation: Conversation | null, res) => {
  business.addConversation(conversation)
    .then((conversationList) => {
      res.json(conversationList);
    })
    .catch(() => {
      res.status(400).send('conversation-add-error');
    });
}
