import * as business from '../business';
import { UserCredentials } from "../models";
import { AddUserController } from './contracts';
import { Response } from 'express-serve-static-core';

export const addUserController: AddUserController = (userCredential: UserCredentials | null, res: Response) => {
  business.addUsersToRoom(userCredential)
    .then((result) => {
      if (result) {
        res.status(200).send('user-add-successfully');
      } else {
        res.status(400).send('user-add-error');
      }
    })
    .catch(() => {
      res.status(400).send('have-any-error');
    });
}
