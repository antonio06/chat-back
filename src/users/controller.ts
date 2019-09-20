import * as createError from 'http-errors';
import * as status from 'http-status';
import { getUserNameFromBody } from '../utils';
import { service } from './service';
import { RequestHandler } from 'express';
import { Socket, Server } from 'socket.io';
import { socketEvents } from '../constants/socketEvents';
import { User } from '../models';

const onlineUsers: User[] = [];

const addUser: RequestHandler = async (req, res, next) => {
  const userName = getUserNameFromBody(req.body);
  if (!userName) {
    return next(createError(status.BAD_REQUEST, 'not-valid-username'));
  }

  if (await service.userNameExist(userName)) {
    return next(createError(status.UNPROCESSABLE_ENTITY, 'user-already-exists'));
  }

  const result = await service.addUser(userName);

  res.status(status.OK).json(result);
};

const onUserLogged = async (socket: Socket, io: Server) => {
  const user = await service.getUserByUserId(socket.handshake.query.userId);

  if (user) {
    io.emit(socketEvents.loggedUser, user);
    onlineUsers.push(user);
    socket.emit(socketEvents.onConnected, {users: onlineUsers});
  }
};

const userExist = async (id: string): Promise<boolean> => {
  return await service.getUserByUserId(id) !== null;
};

export const userController = {
  addUser,
  onUserLogged,
  userExist,
};
