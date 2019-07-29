import { RequestHandler } from 'express';
import * as createError from 'http-errors';
import * as status from 'http-status';
import { Socket } from 'socket.io';
import { getMessageFromBody } from './mappers';
import { service } from './service';

const addMessage: RequestHandler = (req, res, next) => async (socket: Socket) => {
  const messageParams = getMessageFromBody(req.body);
  if (!messageParams) {
    return next(createError(status.BAD_REQUEST, 'conversation-add-error'));
  }

  const message = await service.addMessage(messageParams);

  socket.broadcast.emit('message connected', message);
  res.status(status.CREATED).json(message);
};

export const conversationController = {
  addMessage,
};
