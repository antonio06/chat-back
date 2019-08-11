import { RequestHandler, NextFunction } from 'express';
import * as createError from 'http-errors';
import * as status from 'http-status';
import { getMessagePropertyBy } from '../utils';
import { service } from './service';

const addMessage = (next: NextFunction) => async (data: any) =>  {
  const messageParams = getMessagePropertyBy(data);
  if (!messageParams) {
    return next(createError(status.BAD_REQUEST, 'conversation-add-error'));
  }

  return await service.addMessage(messageParams);
  // Const message = await service.addMessage(messageParams);

  // Res.status(status.CREATED).json(message);
};

export const conversationController = {
  addMessage,
};
