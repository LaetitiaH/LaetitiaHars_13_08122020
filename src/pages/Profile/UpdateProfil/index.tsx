import React, { useState } from "react";
import { User } from "../../../utils/models/user.model";
import { useMutation } from "react-query";
import { useUpdateProfileUser } from "../../../utils/services/user.service";
import { updateUser } from "../../../features/user/user";
import { useAppDispatch } from "../../../utils/store";
import "./index.scss";

const UpdateProfile: React.FC<{ user: User }> = ({ user }) => {
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isUserToUpdate, setIsUserToUpdate] = useState<boolean>(false);

  const updateProfileMutation = useMutation(useUpdateProfileUser, {
    onSuccess: (params) => {
      dispatch(updateUser(params));
      setIsUserToUpdate(false);
      setFirstName("");
      setLastName("");
    },
  });

  const userToUpdate = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    updateProfileMutation.mutate({ firstName, lastName });
  };

  return (
    <>
      {!isUserToUpdate && (
        <button
          type="button"
          className="edit-button"
          onClick={() => setIsUserToUpdate(true)}
        >
          Edit Name
        </button>
      )}
      <div>
        <form onSubmit={userToUpdate}>
          {isUserToUpdate && (
            <div className="update-wrapper">
              <div className="input-wrapper">
                <input
                  placeholder={user.firstName || "Firstname"}
                  type="text"
                  id="firstName"
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <input
                  placeholder={user.lastName || "Lastname"}
                  type="text"
                  id="lastName"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>

              <div className="button-wrapper">
                <button
                  disabled={!firstName || !lastName}
                  type="submit"
                  className="update-button save-button"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="update-button cancel-button"
                  onClick={() => setIsUserToUpdate(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
