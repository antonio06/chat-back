import { Conversation, UserCredentials } from "../models";

export type AddConversationController = (conversation: Conversation | null, res: any) => void;
export type AddUserController = (userCredential: UserCredentials | null, res: any) => void;
