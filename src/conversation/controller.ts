import { Response, Request, NextFunction } from 'express';
import { getMessageFromBody } from './mappers';
import { service } from './service';
import * as createError from 'http-errors';

const addMessage = async (req: Request, res: Response, next: NextFunction) => {
  const messageParams = getMessageFromBody(req.body)
  if (messageParams) {
    const message = await service.addMessage(messageParams);
    res.status(200).json(message)
  } else {
    next(createError(427, 'conversation-add-error'));
  }
}

export const conversationController = {
  addMessage
}
