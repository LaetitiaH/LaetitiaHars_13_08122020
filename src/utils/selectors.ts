import { RootState } from "./store";

export const selectIsUserAuthenticated = (state: RootState) =>
  state.auth.isUserAuthenticated;

export const selectCurrentUser = (state: RootState) => state.user;
