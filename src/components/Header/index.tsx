import "./index.scss";
import logo from "../../assets/img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../utils/store";
import { selectCurrentUser } from "../../utils/selectors";
import { setUserAuthenticated } from "../../features/auth/auth";
import {
  getTokenSaved,
  removeTokenSaved,
} from "../../utils/services/local-storage.service";
import { removeUser, setUser } from "../../features/user/user";
import { useProfileUser } from "../../utils/services/user.service";
import { useMutation } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(selectCurrentUser);
  const token = getTokenSaved();

  const saveUserInformationMutation = useMutation(useProfileUser, {
    onSuccess: (response) => {
      const user = response.body;
      dispatch(setUser(user));
      dispatch(setUserAuthenticated({ isUserAuthenticated: true }));
    },
    onError: () => {
      removeTokenSaved();
      navigate("/", { replace: true });
    },
  });

  if (!user.email && token) {
    saveUserInformationMutation.mutate();
  }

  const logout = () => {
    removeTokenSaved();
    dispatch(setUserAuthenticated({ isUserAuthenticated: false }));
    dispatch(removeUser());
    navigate("/", { replace: true });
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!user.email && (
          <Link to="/signIn" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="main-nav-item-text">Sign In</span>
          </Link>
        )}
        {user.email && (
          <>
            <Link to="/profile" className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              {user.firstName}
            </Link>
            <Link
              to="/"
              className="main-nav-item main-nav-item-button"
              onClick={logout}
            >
              <FontAwesomeIcon icon={faSignOut} />
              Sign Out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
