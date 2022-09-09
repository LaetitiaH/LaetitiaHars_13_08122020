export const saveToken = (token: string): void => {
  localStorage.setItem("accessToken", token);
};

export const updateRememberMeIn = (
  hasRememberMeChecked: boolean,
  email: string
): void => {
  if (hasRememberMeChecked) {
    localStorage.setItem("rememberMe", email);
  } else {
    localStorage.removeItem("rememberMe");
  }
};

export const getRememberMeSaved = (): string | null => {
  return localStorage.getItem("rememberMe");
};

export const removeTokenSaved = (): void => {
  return localStorage.removeItem("accessToken");
};

export const getTokenSaved = (): string | null => {
  return localStorage.getItem("accessToken");
};
