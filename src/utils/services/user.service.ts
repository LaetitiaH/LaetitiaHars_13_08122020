import { AuthApi, AuthResponseApi } from "../models/auth.model";
import { getTokenSaved } from "./local-storage.service";
import {
  UserResponseApi,
  UserUpdateApi,
  UserUpdateResponseApi,
} from "../models/user.model";
import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

const authParams = "/user/login";
const profileParams = "/user/profile";
const updateProfileParams = "/user/profile";

export const useAuthUser = (params: AuthApi): Promise<AuthResponseApi> =>
  baseUrl.post<AuthResponseApi>(authParams, params).then((res) => res.data);

export const useProfileUser = (): Promise<UserResponseApi> => {
  const token = getTokenSaved();
  return baseUrl
    .post<UserResponseApi>(profileParams, null, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
};

export const useUpdateProfileUser = (
  params: UserUpdateApi
): Promise<UserUpdateApi> => {
  const token = getTokenSaved();
  return baseUrl
    .put<UserUpdateResponseApi>(updateProfileParams, params, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(() => params);
};
