import { Server, Socket } from 'socket.io';
import { socketEvents } from '../constants/socketEvents';
import { service } from './service';
import { getMessagePropertyBy } from './utils';

const onSendMessage = async (socket: Socket, io: Server, data: any) => {
  const messageParams = getMessagePropertyBy(data);
  if (!messageParams) {
    socket.emit(socketEvents.errorAddMessage, { message: 'conversation-add-error' });
  } else {
    const message = await service.addMessage(messageParams);
    io.emit(socketEvents.onNewMessage, message);
  }
};

export const conversationController = {
  onSendMessage,
};
