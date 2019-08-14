import * as createError from 'http-errors';
import * as status from 'http-status';
import { getUserNameFromBody } from '../utils';
import { service } from './service';
import { RequestHandler } from 'express';
import { Socket } from 'socket.io';
import { socketEvents } from '../constants/socketEvents';

const addUser: RequestHandler = async (req, res, next) => {
  const userName = getUserNameFromBody(req.body);
  if (!userName) {
    return next(createError(status.BAD_REQUEST, 'not-valid-user-name'));
  }

  if (service.userNameExist(userName)) {
    return next(createError(status.UNPROCESSABLE_ENTITY, 'user-already-exists'));
  }

  const result = service.addUser(userName);

  res.status(status.OK).json(result);
};

const onUserLogged = (socket: Socket) => {
  const user = service.getUserByUserId(socket.handshake.query.userId);

  if (user) {
    socket.broadcast.emit(socketEvents.loggedUser, user);
  }
};

export const userController = {
  addUser,
  onUserLogged,
};
