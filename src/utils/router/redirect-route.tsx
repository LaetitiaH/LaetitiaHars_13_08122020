import React, { FC } from "react";
import { useAppSelector } from "../store";
import { selectIsUserAuthenticated } from "../selectors";
import { Navigate } from "react-router-dom";

interface PropType {
  component: React.FC;
}

const RedirectRoute: FC<PropType> = ({ component: Component }) => {
  const isAuthenticated = useAppSelector(selectIsUserAuthenticated);

  return !isAuthenticated ? <Component /> : <Navigate to="/profile" />;
};

export default RedirectRoute;
