const defaultRoute: string = '/';

export const PORT = process.env.PORT || 3000;
export const routes = {
  server: 'http://localhost',
  default: defaultRoute,
  addUserToChat: `${defaultRoute}addUserToRoom`,
  addConversation: `${defaultRoute}addConversationToChat`,
};
