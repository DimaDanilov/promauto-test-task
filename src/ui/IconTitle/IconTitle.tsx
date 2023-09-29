import React from "react";
import { SvgIconComponent } from "@mui/icons-material";
import "./IconTitle.less";

type IconTitleProps = {
  Icon: SvgIconComponent;
  title: string;
};

export const IconTitle = ({ Icon, title }: IconTitleProps) => {
  return (
    <div className="icon-title-container">
      <Icon />
      <p className="icon-title_title">{title}</p>
    </div>
  );
};
