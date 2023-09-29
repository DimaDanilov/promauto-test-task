import React from "react";
import "./Header.less";

export const Header = ({ title }: { title: string }) => {
  return (
    <header>
      <h1 className="header-title">{title}</h1>
    </header>
  );
};
