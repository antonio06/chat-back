import { RequestHandler } from 'express';
import * as createError from 'http-errors';
import { getMessageFromBody } from './mappers';
import { service } from './service';

const addMessage: RequestHandler = async (req, res, next) => {
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
