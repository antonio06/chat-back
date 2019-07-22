import { RequestHandler } from 'express';
import * as createError from 'http-errors';
import { getUserNameFromBody } from './mappers';
import { userService } from './service';

const addUser: RequestHandler = async (req, res, next) => {
  const userName = getUserNameFromBody(req.body);
  if (!userName) {
    return next(createError(400, 'not-valid-user-name'));
  }

  if (userService.userNameExist(userName)) {
    return next(createError(427, 'user-exited-already'));
  }

  const result = await userService.addUser(userName);
  res.status(200).json(result);
}

export const userController = {
  addUser
}
