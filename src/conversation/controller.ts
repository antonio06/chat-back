import * as createError from 'http-errors';
import * as status from 'http-status';
import { Socket } from 'socket.io';
import { socketEvents } from '../constants/socketEvents';
import { getMessagePropertyBy } from '../utils';
import { service } from './service';

const addMessage = async (socket: Socket, data: any) => {
  const messageParams = getMessagePropertyBy(data);
  if (!messageParams) {
    socket.broadcast.emit(socketEvents.errorAddMessage, createError(status.BAD_REQUEST, 'conversation-add-error'));
  } else {
    const message = await service.addMessage(messageParams);
    socket.broadcast.emit(socketEvents.successAddMessage, message);
  }
};

export const conversationController = {
  addMessage,
};
