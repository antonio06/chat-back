import { Conversation, UserCredentials } from "../models";

export type AddConversation = (newConversation: Conversation | null) => Promise<Conversation[]>;
export type AddUsersToRoom = (newUser: UserCredentials | null) => Promise<boolean>;
