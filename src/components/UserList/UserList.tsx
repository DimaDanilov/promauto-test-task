import React, { useState, useEffect } from "react";
import { getUsers } from "../../api/UserApi";
import { UserModel } from "../../models/UserModel";
import { UserCard } from "./UserCard/UserCard";

export const UserList = () => {
  const [userList, setUserList] = useState<UserModel[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setUserList(await getUsers());
    };
    fetchUsers();
  }, []);

  const userCards = userList.map((u) => <UserCard user={u} />);

  return <div>{userCards}</div>;
};
