import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store";
import { selectIsUserAuthenticated } from "../selectors";

interface PropType {
  component: React.FC;
}

const ProtectedRoute: FC<PropType> = ({ component: Component }) => {
  const isAuthenticated = useAppSelector(selectIsUserAuthenticated);

  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
