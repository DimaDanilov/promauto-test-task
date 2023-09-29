import React from "react";
import { UserList } from "../../components/UsersPage/UserList/UserList";
import { Container } from "../../ui/Container/Container";
import { UserSearch } from "../../components/UsersPage/UserSearch/UserSearch";

export const UsersPage = () => {
  return (
    <Container>
      <UserSearch />
      <UserList />
    </Container>
  );
};
