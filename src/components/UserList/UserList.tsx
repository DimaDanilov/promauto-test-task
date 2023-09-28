import React from "react";

export const UserList = () => {
  const userList: Array<string> = ["testUser"];
  return (
    <div>
      <h1>{userList[0]}</h1>
    </div>
  );
};
