interface ResponseStatus {
  code: number,
  message: string,
};

export const loginSuccess: ResponseStatus = {
  code: 200,
  message: 'Login success',
};

export const loginError: ResponseStatus = {
  code: 400,
  message: 'Login error',
};
