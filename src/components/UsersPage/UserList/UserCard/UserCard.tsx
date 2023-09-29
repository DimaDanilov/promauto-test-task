import React from "react";
import { UserModel } from "../../../../models/UserModel";
import "./UserCard.less";
import { IconTitle } from "../../../../ui/IconTitle/IconTitle";
import MailIcon from "@mui/icons-material/Mail";
import PublicIcon from "@mui/icons-material/Public";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { UserInitials } from "./UserInitials/UserInitials";
import { parseInitials } from "../../../../utils/parseInitials";

export const UserCard = ({ user }: { user: UserModel }) => {
  return (
    <div className="user-card">
      <div className="user-card__name-info-container">
        <UserInitials initials={parseInitials(user.name)} />
        <div className="user-card__name-info-container__name_container">
          <h2 className="user-card_name-title">{user.name}</h2>
          <h3 className="user-card_name-title">{user.username}</h3>
        </div>
      </div>
      <div className="user-card_user-info-titles-container">
        <IconTitle Icon={MailIcon} title={"email:" + user.email} />
        <IconTitle Icon={PublicIcon} title={"website:" + user.website} />
        <IconTitle Icon={LocalPhoneIcon} title={"phone:" + user.phone} />
      </div>
    </div>
  );
};
