import { RequestHandler } from 'express';
import * as createError from 'http-errors';
import status from 'http-status';
import { getUserNameFromBody } from './mappers';
import { service } from './service';

const addUser: RequestHandler = async (req, res, next) => {
  const userName = getUserNameFromBody(req.body);
  if (!userName) {
    return next(createError(status.BAD_REQUEST, 'not-valid-user-name'));
  }

  if (service.userNameExist(userName)) {
    return next(createError(status.UNPROCESSABLE_ENTITY, 'user-exited-already'));
  }

  const result = await service.addUser(userName);
  res.status(status.CREATED).json(result);
}

export const userController = {
  addUser
}
