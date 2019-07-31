import { RequestHandler } from 'express';
import * as createError from 'http-errors';
import * as status from 'http-status';
import { getMessageFromBody } from './mappers';
import { service } from './service';

const addMessage: RequestHandler = async (req, res, next) =>  {
  const messageParams = getMessageFromBody(req.body);
  if (!messageParams) {
    return next(createError(status.BAD_REQUEST, 'conversation-add-error'));
  }

  const message = await service.addMessage(messageParams);

  res.status(status.CREATED).json(message);
};

export const conversationController = {
  addMessage,
};
