import * as createError from 'http-errors';
import * as status from 'http-status';
import { getMessagePropertyBy } from '../utils';
import { service } from './service';
import { Socket } from 'socket.io';

const addMessage = async (socket: Socket, data: any) => {
  const messageParams = getMessagePropertyBy(data);
  if (!messageParams) {
    socket.broadcast.emit('errorAddMessage', createError(status.BAD_REQUEST, 'conversation-add-error'));
  } else {
    const message = await service.addMessage(messageParams);

    socket.broadcast.emit('successAddMessage', message);
  }
};

export const conversationController = {
  addMessage,
};
