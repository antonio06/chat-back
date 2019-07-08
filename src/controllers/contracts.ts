import { Conversation, UserCredentials } from "../models";
import { Response } from "express-serve-static-core";

export type AddConversationController = (conversation: Conversation | null, res: Response) => void;
export type AddUserController = (userCredential: UserCredentials | null, res: Response) => void;
