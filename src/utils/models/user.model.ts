export interface User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  createdAt: string;
  uptadedAt: string;
}

export interface UserResponseApi {
  body: User;
}

export interface UserUpdateApi {
  firstName: string;
  lastName: string;
}

export interface UserUpdateResponseApi {
  status: number;
  message: string;
  body: {
    id: string;
    email: string;
  };
}
