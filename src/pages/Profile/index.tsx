import React from "react";
import "./index.scss";
import { useMutation } from "react-query";
import { useProfileUser } from "../../utils/services/user.service";
import { setUser } from "../../features/user/user";
import { useAppDispatch, useAppSelector } from "../../utils/store";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../utils/selectors";
import UpdateProfile from "./UpdateProfil";
import Transactions from "./Transactions";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(selectCurrentUser);

  const profileMutation = useMutation(useProfileUser, {
    onSuccess: (response) => {
      const user = response.body;
      dispatch(setUser(user));
    },
    onError: () => {
      navigate("/");
    },
  });

  if (!user.email) {
    profileMutation.mutate();
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}
        </h1>
        <UpdateProfile user={user}></UpdateProfile>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Transactions></Transactions>
    </main>
  );
};

export default Profile;
