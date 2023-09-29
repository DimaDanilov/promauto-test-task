import React, { useState } from "react";
import { UserModel } from "../../../../models/UserModel";
import "./UserCard.less";
import { UserInitials } from "./UserInitials/UserInitials";
import { parseInitials } from "../../../../utils/parseInitials";
import { IconTitle } from "../../../../ui/IconTitle/IconTitle";
import MailIcon from "@mui/icons-material/Mail";
import PublicIcon from "@mui/icons-material/Public";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SignpostIcon from "@mui/icons-material/Signpost";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeIcon from "@mui/icons-material/Home";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const UserCard = ({ user }: { user: UserModel }) => {
  const [isExtendedInfo, setIsExtendedInfo] = useState<boolean>(false);

  return (
    <div
      className={`user-card ${isExtendedInfo && "extended-card"}`}
      onClick={() => setIsExtendedInfo(!isExtendedInfo)}
    >
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
        {isExtendedInfo && (
          <IconTitle
            Icon={SignpostIcon}
            title={"street:" + user.address.street}
          />
        )}
        {isExtendedInfo && (
          <IconTitle
            Icon={AirlineSeatIndividualSuiteIcon}
            title={"suite:" + user.address.suite}
          />
        )}
        {isExtendedInfo && (
          <IconTitle
            Icon={LocationCityIcon}
            title={"city:" + user.address.city}
          />
        )}
        {isExtendedInfo && (
          <IconTitle
            Icon={HomeIcon}
            title={"zipcode:" + user.address.zipcode}
          />
        )}
        {isExtendedInfo && (
          <IconTitle
            Icon={EmojiTransportationIcon}
            title={"company-name:" + user.company.name}
          />
        )}
        {isExtendedInfo && (
          <IconTitle
            Icon={RecordVoiceOverIcon}
            title={"catchPhrase:" + user.company.catchPhrase}
          />
        )}
        {isExtendedInfo && (
          <IconTitle Icon={AttachMoneyIcon} title={"bs:" + user.company.bs} />
        )}
      </div>
    </div>
  );
};
