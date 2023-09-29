import React, { useEffect, useState } from "react";
import { UserCard } from "./UserCard/UserCard";
import "./UserList.less";
import { useUsersStore } from "../../../store/UsersStore";

export const UserList = () => {
  const usersStore = useUsersStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      await usersStore.setUsers();
      setIsLoading(false);
    }

    fetchUsers();
  }, []);

  const userCards = usersStore.users.map((u) => <UserCard user={u} />);

  return (
    <div className="user-cards-container">
      {isLoading ? <p>Loading...</p> : userCards}
    </div>
  );
};
