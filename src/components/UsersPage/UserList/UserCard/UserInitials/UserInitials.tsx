import React from "react";
import "./UserInitials.less";

export const UserInitials = ({ initials }: { initials: string }) => {
  return (
    <div className="user-initials-background">
      <h2>{initials}</h2>
    </div>
  );
};
