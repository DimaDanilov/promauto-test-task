import React from "react";
import { UserModel } from "../../../models/UserModel";
import "./UserCard.less";

export const UserCard = ({ user }: { user: UserModel }) => {
  return (
    <div className="user-card">
      <h1>{user.email}</h1>
    </div>
  );
};
