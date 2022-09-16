export interface AuthApi {
  email: string;
  password: string;
}

export interface AuthResponseApi {
  body: { token: "string" };
}
