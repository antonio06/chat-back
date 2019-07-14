import { Response } from 'express-serve-static-core';
import * as business from '../business';
import { User } from "../models";

export const addUserController = (userCredential: User | null, res: Response) => {
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
