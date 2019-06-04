import { Conversation, UserCredentials } from "../models";

export type MapperToConversation = (id: number, name: string, message: string) => Conversation | null;
export type MapperToUserCredential = (userName: string) => UserCredentials | null;
