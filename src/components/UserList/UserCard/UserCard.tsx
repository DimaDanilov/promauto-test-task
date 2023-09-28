import React from "react";
import { UserModel } from "../../../models/UserModel";

export const UserCard = ({ user }: { user: UserModel }) => {
  return (
    <div>
      <h1>{user.email}</h1>
    </div>
  );
};
