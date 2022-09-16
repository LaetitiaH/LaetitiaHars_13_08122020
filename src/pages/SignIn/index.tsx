import React, { useState } from "react";
import "./index.scss";
import { useAppDispatch } from "../../utils/store";
import { useMutation } from "react-query";
import { useAuthUser } from "../../utils/services/user.service";
import { setUserAuthenticated } from "../../features/auth/auth";
import {
  saveToken,
  updateRememberMeIn,
  getRememberMeSaved,
} from "../../utils/services/local-storage.service";
import { useNavigate } from "react-router-dom";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const hasRememberMeEmail = getRememberMeSaved();
  const [email, setEmail] = useState<string>(hasRememberMeEmail || "");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(!!hasRememberMeEmail);

  const userAuthMutation = useMutation(useAuthUser, {
    onSuccess: (response) => {
      const token: string = response.body.token;
      saveToken(token);
      updateRememberMeIn(rememberMe, email);
      dispatch(setUserAuthenticated({ isUserAuthenticated: true }));
      navigate("/profile");
    },
  });

  const logIn = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    userAuthMutation.mutate({ email: email, password: password });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={logIn}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              autoComplete="on"
              type="text"
              value={email}
              id="username"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              autoComplete="on"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          {userAuthMutation.isError && (
            <div className="error">Email or password is not correct</div>
          )}
        </form>
      </section>
    </main>
  );
};

export default SignIn;
