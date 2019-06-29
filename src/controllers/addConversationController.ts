import * as business from '../business';
import { Conversation } from '../models';
import { AddConversationController } from './contracts';
import { Response } from 'express';

export const addConversationController: AddConversationController = (conversation: Conversation | null, res: Response) => {
  business.addConversation(conversation)
    .then((conversationList) => {
      res.json(conversationList);
    })
    .catch(() => {
      res.status(400).send('conversation-add-error');
    });
}