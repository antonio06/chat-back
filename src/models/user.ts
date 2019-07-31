export interface User {
  id: string;
  userName: string;
}

export const emptyUser = (): User => ({
  id: '',
  userName: '',
});
