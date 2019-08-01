import * as createError from 'http-errors';
import * as status from 'http-status';
import { Socket } from 'socket.io';
import { events } from '../constants';
import { getUserNameFromBody } from './mappers';
import { service } from './service';

const addUser = (socket: Socket) => {
  socket.emit(events.loggedUser, (userName: string) => {
    const userNameRawData = getUserNameFromBody(userName);
    if (!userNameRawData) {
      socket.broadcast.emit(events.userError, createError(status.BAD_REQUEST, 'not-valid-user-name'));
    }

    if (service.userNameExist(userNameRawData)) {
      socket.broadcast.emit(events.userError, createError(status.UNPROCESSABLE_ENTITY, 'user-already-exists'));
    }

    const result = service.addUser(userNameRawData);

    socket.broadcast.emit('user-connected', result);
  });
};

export const userController = {
  addUser,
};
